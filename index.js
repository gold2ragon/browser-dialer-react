'use strict';

require('dotenv-safe').load();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
const ClientCapability = twilio.jwt.ClientCapability;
const VoiceResponse = twilio.twiml.VoiceResponse;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

let app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Generate a Twilio Client capability token
app.get('/token', (request, response) => {
  const capability = new ClientCapability({
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    authToken: process.env.TWILIO_AUTH_TOKEN,
  });

  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: process.env.TWILIO_TWIML_APP_SID})
  );
  capability.addScope(
    new ClientCapability.IncomingClientScope('joey')
  );
  const token = capability.toJwt();
  response.send({
    token: token,
  });
});

// Create TwiML for outbound calls
app.post('/voice', (request, response) => {
  let voiceResponse = new VoiceResponse();
  voiceResponse.dial({
    callerId: process.env.TWILIO_NUMBER,
  }, request.body.number);
  response.type('text/xml');
  response.send(voiceResponse.toString());
});

app.post('/sms', (req, res) => {
  // require the Twilio module and create a REST client
  const client = require('twilio')(accountSid, authToken);
  res.header('Content-Type', 'application/json');
  console.log(req.body);
  client.messages.create(
    {
      from: process.env.TWILIO_NUMBER,
      to: req.body.to, 
      body: req.body.body
    },
    (err, message) => {
      console.log(message);
    }
  );
  return res.send({result: JSON.stringify(req.body)});
});

let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Express Server listening on *:${port}`);
});

module.exports = app;
