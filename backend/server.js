const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Backend!');
});

// Other routes here...

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

