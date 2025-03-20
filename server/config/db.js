console.log('in db')
const mongoose = require("mongoose");
console.log('mongoose')
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

console.log('here')

if (!mongoURI) {
    console.error("No URI");
    process.exit(1);    
}

mongoose.connect(mongoURI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1);
    });

module.exports = mongoose;
