const express = require('express');
const app = express();

// Your GitHub secret
const GITHUB_SECRET_API_KEY = process.env.GITHUB_SECRET_API_KEY;

// Define a route to retrieve the API key
app.get('/api/key', (req, res) => {
  res.json({ apiKey: GITHUB_SECRET_API_KEY });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

