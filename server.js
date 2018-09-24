const express = require('express');
const app = express();

// Request Mapping
// ====================================

app.get('/', (req, res) => {
  console.log(req.query)
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
