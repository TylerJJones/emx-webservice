// Enable Express
const express = require('express');
const app = express();

// Request Mapping
// ====================================

// Ping Request
app.get('/?q=Ping', (req, res) => {
  res.send('OK');
});

// Can you provide proof of eligibility to work in the US?
app.get('/?q=Status', (req, res) => {
  res.send('Yes');
});

// Please provide a URL where we can download the source code of your resume and submssion of web service.
app.get('/?q=Source', (req, res) => {
  res.send('https://github.com/TylerJJones/emx-webservice.git');
});

// What is your Email Address?
app.get('/?q=Email', (req, res) => {
  res.send('tylerjjones09@gmail.com');
});

// Which position are you applying for?
app.get('/?q=Position', (req, res) => {
  res.send('Lead or Senior Software Engineer');
});

// How many years or software development experience do you have?
app.get('/?q=Years', (req, res) => {
  res.send('6+ years experience as a software developer, 11+ in web development.');
});

// Please provide a URL where we can download your resume and cover letter.
app.get('/?q=Resume', (req, res) => {
  res.send('https://github.com/TylerJJones/emx-webservice.git');
});

// Please list your relevant university degree(s).
app.get('/?q=Degree', (req, res) => {
  res.send('Associates of Design and Technology from IADT Chicago');
});

// What is your full name?
app.get('/?q=Name', (req, res) => {
  res.send('Tyler Jones');
});

// How did you hear about this position?
app.get('/?q=Referrer', (req, res) => {
  res.send('Indeed');
});

// Please provide a phone number we can use to reach you.
app.get('/?q=Phone', (req, res) => {
  res.send('573-680-5560');
});

// Please solve this puzzle
app.get('/?q=Puzzle', (req, res) => {
  res.send('ABCD\nA=>>>\nB<=>>\nC<<=>\nD<<<=');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
