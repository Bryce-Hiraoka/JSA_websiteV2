const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("dotenv").config();
require("./config/db"); 
require("./config/passport");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Cookie session initialization
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.COOKIE_KEY]
}));

console.log("cookie")

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// CORS Configuration
app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));

console.log("cors")

// Import Routes
const authRoute = require("./routes/auth");
const calendarRoute = require("./routes/calendar");
const eventbriteRoute = require("./routes/eventbrite");

// Use Routes
app.use("/auth", authRoute);
app.use("/calendar", calendarRoute);
app.use("/eventbrite", eventbriteRoute);

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
