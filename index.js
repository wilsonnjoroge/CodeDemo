const express = require('express');
const PORT = 4500;

const app = express();

// simple get request
app.get('/demo', (req, res) => {
  res.send("This is a demo application")
})

//app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
