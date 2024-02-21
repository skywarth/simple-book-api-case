const mongoose = require('mongoose');

// Replace 'yourdbname' with the actual name of your MongoDB database
const mongoURI = 'mongodb://mongo:27017/simple-book-api-case-database';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connection successful!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1'))
    .catch(err => console.error('MongoDB connection error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!:', err));