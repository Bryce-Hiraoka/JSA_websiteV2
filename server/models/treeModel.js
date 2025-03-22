const mongoose = require("mongoose");
const { Schema } = mongoose;

const treeSchema = new Schema({
    _id: Number,
    name: String,
    children: {
        type: Array,
        default: [],
    }
});

const Tree = mongoose.model("Tree", treeSchema, "Family");

module.exports = Tree;