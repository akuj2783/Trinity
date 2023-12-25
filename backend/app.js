const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
require('dotenv').config();
const cors=require('cors');

const app = express();

const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Handle POST request from frontend
app.post('/inquiry', (req, res) => {
  const { name, mobile, email, subject, message } = req.body;
  console.log(name,mobile)

// nodemailer transporter
const transporter = nodemailer.createTransport({
service:"gmail", 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
}); 

// Mail options
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_RECEIVER, 
  subject: `New Inquiry: ${subject}`,
  text: `
    Name: ${name}
    Mobile: ${mobile}
    Email: ${email}
    Message: ${message}
  `
};

// Send mail
transporter.sendMail(mailOptions)
  .then(info => {
    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully');
  })
  .catch(error => {
    console.log(error);
    res.status(500).send('Error sending email');
  });

});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
