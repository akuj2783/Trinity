const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const {google}=require('googleapis')
require('dotenv').config();
const cors=require('cors');

const app = express();

const PORT=process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/inquiry', (req, res) => {
  const { name, mobile, email, subject, message } = req.body;
  console.log(name, mobile);

  const OAuth2 = google.auth.OAuth2;

  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENTID, // ClientID
    process.env.OAUTH_CLIENT_SECRET, // Client Secret
    'https://developers.google.com/oauthplayground' // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
  });

  async function sendMail(){
    try{
      const accessToken = await oauth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_USER,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
          accessToken: accessToken
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

      const result = await transporter.sendMail(mailOptions);
      return result;

    } catch(error) {
      return error;
    }
  }

  sendMail()
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
});
