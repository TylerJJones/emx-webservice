const express = require('express');
const app = express();

// Request Mapping
// ====================================

// Ping Request
app.get('/', (req, res) => {
  // res.send('OK');
  var q = request.query.q;
  response.end("I have received the Q: " + q);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
