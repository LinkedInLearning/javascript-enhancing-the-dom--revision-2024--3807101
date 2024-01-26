const express = require('express');
const fs = require('fs');
const router = express.Router();
const contactPath = './data/contact.json';


// Route to get contact information
router.get('/', (req, res) => {
    fs.readFile(contactPath, 'utf8', (err, data) => {
        if (err) {
            // If there's an error, it could mean the file doesn't exist,
            // so you might want to return an empty object or predefined structure.
            res.status(500).send('Error reading the contact data');
        } else {
            res.send(JSON.parse(data));
        }
    });
});

// Route to save contact information
router.post('/', (req, res) => {
    const newContactInfo = req.body;
    fs.writeFile(contactPath, JSON.stringify(newContactInfo, null, 2), (err) => {
        if (err) {
            res.status(500).send('Error saving the contact data');
        } else {
            res.send('Contact information updated successfully');
        }
    });
});

module.exports = router;
