const express = require('express');
const fs = require('fs');
const router = express.Router();
const skillsPath = './data/skills.json';


// Route to get skills
router.get('/', (req, res) => {
    fs.readFile(skillsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading skills data');
        } else {
            res.send(JSON.parse(data));
        }
    });
});

// Route to add a new skill
router.post('/', (req, res) => {
    fs.readFile(skillsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading skills data');
        } else {
            const skills = JSON.parse(data);
            skills.push(req.body.skill); // Add new skill
            fs.writeFile(skillsPath, JSON.stringify(skills, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error writing skills data');
                } else {
                    res.send('Skill added successfully');
                }
            });
        }
    });
});

// Route to delete a skill
router.delete('/', (req, res) => {
    fs.readFile(skillsPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading skills data');
        } else {
            let skills = JSON.parse(data);
            skills = skills.filter(skill => skill !== req.body.skill); // Remove the skill
            fs.writeFile(skillsPath, JSON.stringify(skills, null, 2), (err) => {
                if (err) {
                    res.status(500).send('Error writing skills data');
                } else {
                    res.send('Skill deleted successfully');
                }
            });
        }
    });
});


module.exports = router;
