const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, JS, CSS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Routes for main HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/blogs', (req, res) => {
  res.sendFile(path.join(__dirname, 'blogs.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.get('/navbar.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'navbar.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
