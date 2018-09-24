// Enable Express
const express = require('express');
const app = express();

// Request Mapping
// ====================================

// Ping Request
app.get('/?q=Ping&d=Please+return+OK+so+that+I+know+your+service+works.', (req, res) => {
  res.send('OK');
});

// Can you provide proof of eligibility to work in the US?
app.get('/?q=Status&d=Can+you+provide+proof+of+eligibility+to+work+in+the+US%3', (req, res) => {
  res.send('Yes');
});

// Please provide a URL where we can download the source code of your resume and submssion of web service.
app.get('/?q=Source&d=Please+provide+a+URL+where+we+can+download+the+source+code+of+your+resume+submission+web+service.', (req, res) => {
  res.send('https://github.com/TylerJJones/emx-webservice.git');
});

// What is your Email Address?
app.get('/?q=Email+Address&d=What+is+your+email+address%3F', $
  res.send('tylerjjones09@gmail.com');
});

// Which position are you applying for?
app.get('/?q=Position&d=Which+position+are+you+applying+for%3F', $
  res.send('Lead or Senior Software Engineer');
});

// How many years or software development experience do you have?
app.get('/?q=Years&d=How+many+years+of+software+development+experience+do+you+have%3F', $
  res.send('6+ years experience as a software developer, 11+ in web development.');
});

// Please provide a URL where we can download your resume and cover letter.
app.get('/?q=Resume&d=Please+provide+a+URL+where+we+can+download+your+resume+and+cover+letter.', $
  res.send('https://github.com/TylerJJones/emx-webservice.git');
});

// Please list your relevant university degree(s).
app.get('/?q=Degree&d=Please+list+your+relevant+university+degree(s).', $
  res.send('Associates of Design and Technology from IADT Chicago');
});

// What is your full name?
app.get('/?q=Name&d=What+is+your+full+name%3F', $
  res.send('Tyler Jones');
});

// How did you hear about this position?
app.get('/?q=Referrer&d=How+did+you+hear+about+this+position%3F', $
  res.send('Indeed');
});

// Please provide a phone number we can use to reach you.
app.get('/?q=Phone&d=Please+provide+a+phone+number+we+can+use+to+reach+you.', $
  res.send('573-680-5560');
});

// Please provide a phone number we can use to reach you.
app.get('/?q=Phone&d=Please+provide+a+phone+number+we+can+use+to+reach+you.', $
  res.send('573-680-5560');
});

// Please solve this puzzle
app.get('/?q=Puzzle&d=Please+solve+this+puzzle%3A%0A+ABCD%0AA-%3E--%0AB--%3E-%0AC--%3D-%0AD--%3C-%0A', $
  res.send('ABCD\nA=>>>\nB<=>>\nC<<=>\nD<<<=');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
