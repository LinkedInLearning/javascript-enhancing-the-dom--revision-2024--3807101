const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataPath = './data/experiences.json';


router.get('/', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});

router.post('/', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        const experiences = JSON.parse(data);
        experiences.push(req.body); // add the new experience
        // Sort experiences based on date here, if necessary
        fs.writeFile(dataPath, JSON.stringify(experiences, null, 2), (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send('Experience added');
        });
    });
});



module.exports = router;
