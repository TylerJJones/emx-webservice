const express = require('express');
const app = express();

// Request Mapping
// ====================================

app.get('/', (req, res) => {
  for (const key in req.query) {
    
    var id = req.query.q;
    
    if(id=='Ping') {
      res.send('OK');
    } else if(id=='Name') {
      res.send('Tyler Jones');
    } else {
      res.send('OK');
    }

  }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
