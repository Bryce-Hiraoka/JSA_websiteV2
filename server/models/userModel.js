const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String },
    googleid: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    refresh: { type: String }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;