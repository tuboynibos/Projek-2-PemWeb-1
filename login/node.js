const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check the credentials (replace this with your actual authentication logic)
  if (username === 'admin' && password === '123456') {
    res.json({ success: true });
  } else {
    res.json({ success: false, message: 'Authentication failed. Please check your credentials.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
