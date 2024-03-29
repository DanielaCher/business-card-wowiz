const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is your fitness training backend!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
