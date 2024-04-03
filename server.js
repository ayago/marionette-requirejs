const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'src')));

// Set content type for JavaScript files
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.set('Content-Type', 'application/javascript');
  }
  next();
});

// Explicitly serve index.html
app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
