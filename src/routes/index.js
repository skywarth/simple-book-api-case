const express = require('express');
const router = express.Router();

const Test = require('../models/Test'); // Adjust the path based on your file structure
const BookRepository = require('../repositories/BookRepository');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/whaddup', function(req, res, next) {
  res.send('hey man whats up!11');
});

router.get('/test-mongo', async (req, res) => {
  try {
    // Create a new document from the Test model
    const testDoc = new Test({ message: 'Hello from MongoDB!'+(Date.now()) });

    // Save the document to the database
    await testDoc.save();

    // Fetch the saved document (or all documents from the 'Test' collection)
    const savedDoc = await Test.find({ });

    // Return the fetched document in the response
    res.json(savedDoc);
  } catch (error) {
    console.error('Error interacting with MongoDB:', error);
    res.status(500).json({ message: 'Error interacting with MongoDB', error: error.message });
  }
});

router.get('/test2', async (req, res) => {
  try {
    // Create a new document from the Test model
    const testDoc = await BookRepository.getInstance().create({ message: 'Hello from MongoDB!'+(Date.now()) });



    // Fetch the saved document (or all documents from the 'Test' collection)
    const savedDoc = await BookRepository.getInstance().index();

    // Return the fetched document in the response
    res.json(savedDoc);
  } catch (error) {
    console.error('Error interacting with MongoDB:', error);
    res.status(500).json({ message: 'Error interacting with MongoDB', error: error.message });
  }
});

module.exports = router;
