const express = require('express');
const app = express();

// Request Mapping
// ====================================

app.get('/', (req, res) => {
  for (const key in req.query) {
    
    // Loop through the request and grab the variable 'q'
    var id = req.query.q;
    
    // Conditional logic to send out the proper response based on ID
    if(id=='Ping') { 
      res.send('OK') 
    } else if(id=='Name') { 
      res.send('Tyler Jones'); 
    } else if(id=='Email Address') { 
      res.send('tylerjjones09@gmail.com'); 
    } else if(id=='Phone') { 
      res.send('573-680-5560');
    } else if(id=='') {
      res.send(''); 
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
