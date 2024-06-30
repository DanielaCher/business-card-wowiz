const express = require('express');
const cors = require('cors');
const { TrialLesson } = require('./db'); // Import the TrialLesson model
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, this is your fitness training backend!');
});

// Handle POST requests to submit user details
app.post('/submit-details', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    // Insert the user details into the database
    await TrialLesson.create({ name, email, phone });
    res.status(200).send('Details received and saved');
  } catch (error) {
    console.error('Error inserting details:', error);
    res.status(500).send('Error saving details');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
