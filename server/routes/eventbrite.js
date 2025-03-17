const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();

const eventID = process.env.EVENT_ID;
//const organID = process.env.ORGANIZATION_ID;
const key = process.env.JSA_TOKEN;

const eventBriteURL = `https://www.eventbriteapi.com/v3/events/${eventID}/?expand=venue`;
//const eventURL = `https://www.eventbriteapi.com/v3/organizations/${organID}/events/`;

router.get('/', async (req, res) => {
    try {
        const response = await fetch(eventBriteURL, {
            headers: {
                'Authorization': `Bearer ${key}`
            }
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: "Failed to fetch Eventbrite data" });
        }

        const data = await response.json();
        req.app.locals.data = data;

        // Todo Fix
        res.redirect('http://localhost:5000/calendar');

    } catch (error) {
        console.error("Error fetching Eventbrite data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
