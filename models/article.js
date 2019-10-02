const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: false
    },

    url: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },

    writer: {
        type: String,
        required: true
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;