const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });  // This will render index.ejs
});

app.get('/projects', (req, res) => {
  res.render('projects', { title: 'My Projects' });  // Render projects.ejs
});

app.get('/designAR123', (req, res) => {
  res.render('designAR123', { title: 'Design Artwork' });  // Render designAR123.ejs
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
