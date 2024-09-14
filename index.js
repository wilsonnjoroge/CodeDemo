const express = require('express');
const PORT = 4500;

const app = express();

app.get('/demo', (req, res) => {
  res.send("This is a demo application")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});