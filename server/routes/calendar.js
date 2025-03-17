const router = require('express').Router();
const { google } = require('googleapis');
const User = require('../models/userModel');
require('dotenv').config();

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:5000/auth/google/callback",
);

router.get('/', async (req, res) => {
    try {
        const eventData = req.app.locals.data;

        if (!eventData) {
            return res.status(400).json({ error: "No event data available" });
        }

        console.log("Event Name:", eventData.name.text);

        const id = global.userID;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const refreshToken = user.refresh;
        oauth2Client.setCredentials({ refresh_token: refreshToken });

        const calendar = google.calendar('v3');

        const response = await calendar.events.insert({
            auth: oauth2Client,
            calendarId: 'primary',
            requestBody: {
                summary: eventData.name.text,
                description: eventData.description.text,
                location: eventData.venue?.address?.localized_address_display || "No location",
                colorId: 6,
                start: { dateTime: eventData.start.utc },
                end: { dateTime: eventData.end.utc },
            }
        });

        console.log("Event created:", response.data);
        res.redirect('http://localhost:3000/events');

    } catch (error) {
        console.error("Error adding event to Google Calendar:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
