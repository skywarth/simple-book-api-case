// Import Mongoose
const mongoose = require('mongoose');

// Define a simple schema for 'Test' with a single 'message' field
const TestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author',
    },
    price: {
        type: Number,
        required: true,
    },

    ISBN: {
        type: String,
        required: true,
    },

    language: {
        type: String,
        required: true,
    },

    number_of_pages: {
        type: Number,
        required: true,
    },

    publisher: {
        type: String,
        required: true,
    },
},{timestamps:true});

// Create the model from the schema
const Test = mongoose.model('Test', TestSchema);

// Export the model to make it accessible in other files
module.exports = Test;