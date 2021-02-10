const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    category: String,
    describe: String,
    selectedfile: String,
    cost: String

});

module.exports = postSchema;