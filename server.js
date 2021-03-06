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
    } else if(id=='Position') {
      res.send('Lead or Senior Software Engineer');
    } else if(id=='Years') {
      res.send('6+ years of software development, 11+ in web development.');
    } else if(id=='Referrer') {
      res.send('indeed.com');
    } else if(id=='Degree') {
      res.send('Associates of Design and Technology from IADT Chicago');
    } else if(id=='Resume') {
      res.send('https://github.com/TylerJJones/emx-webservice.git');
    } else if(id=='Source') {
      res.send('https://github.com/TylerJJones/emx-webservice.git');
    } else if(id=='Status') {
      res.send('Yes');
    } else if(id=='Puzzle') {

      // Grab Puzzel Partial To Be Decoded
      var puzzelCode = req.query.d;
    
      // Decoder Ring Activated!
      puzzelCode = decodeURIComponent(puzzelCode).substring(25);
      var aResult = puzzelCode.substring(7, puzzelCode.length-19);
      var bResult = puzzelCode.substring(12, puzzelCode.length-13);
      var cResult = puzzelCode.substring(19, puzzelCode.length-7);
      var dResult = puzzelCode.substring(25, puzzelCode.length-1);

        // A Result Conditional
        if(aResult == 'A=---') {
        
          aResult = '"A" is the ID Result';
        
        } else if(bResult == 'B-=--') {
        
          bResult = '"B" is the ID Result';
        
        } else if(cResult == 'C--=-') {
        
          cResult = '"C" is the ID Result';
        
        } else if(dResult == 'D---=') {

          dResult = '"D" is the ID Result';

        }

      var fullResult = aResult + "<br>" + bResult + "<br>" + cResult + "<br>" + dResult; 

      // Send Answer  
      res.send(puzzelCode + "\n" + aResult + "\n" + bResult + "\n" + cResult + "\n" + dResult);

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
