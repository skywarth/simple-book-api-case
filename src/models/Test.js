// Import Mongoose
const mongoose = require('mongoose');

// Define a simple schema for 'Test' with a single 'message' field
const TestSchema = new mongoose.Schema({
    message: String
});

// Create the model from the schema
const Test = mongoose.model('Test', TestSchema);

// Export the model to make it accessible in other files
module.exports = Test;