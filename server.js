// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Root endpoint '/'
app.all('/', (req, res) => {
    const response = {
        body: req.body,
        query: req.query,
        method: req.method
    };

    res.json(response);
});

// Public endpoint '/public'
app.all('/public', (req, res) => {
    const response = {
        body: req.body,
        query: req.query,
        method: req.method
    };

    res.json(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});