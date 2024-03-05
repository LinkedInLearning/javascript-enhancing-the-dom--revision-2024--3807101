const express = require('express');
const cors = require('cors');
const contactsRouter = require('./routes/contacts');
const experiencesRouter = require('./routes/experiences');
const skillsRouter = require('./routes/skills');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/api/contact', contactsRouter);
app.use('/api/experiences', experiencesRouter);
app.use('/api/skills', skillsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
