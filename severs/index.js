import 'dotenv/config';
import express from 'express';

import twilio from 'twilio';
import ngrok from 'ngrok';
const AccessToken = twilio.jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;

const app = express();
const twilioAccountSid = 'AC1025d3eb2f8aef583e5c0343ddce41d5';
const twilioApiKey = 'SK1cd66e0e7b507b42e8175fd3b16bb76c';
const twilioApiSecret = 'ggl1rNdZPrAyBki2dIZjrbKsqPdj6gBn';
app.get('/getToken', (req, res) => {
  if (!req.query || !req.query.userName) {
    return res.status(400).send('Username parameter is required');
  }
  const identity = 'user';
  const token = new AccessToken(
    twilioAccountSid,
    twilioApiKey,
    twilioApiSecret,
    {identity: identity}
  );
  // Set the Identity of this token
  token.identity = req.query.userName;

  // Grant access to Video
  var grant = new VideoGrant({
    room: 'kkkk'
  });
  token.addGrant(grant);

  // Serialize the token as a JWT
  var jwt = token.toJwt();
  console.log('access token: ', jwt)
  console.log('infor: ', token)
  return res.send(jwt);
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`),
);

ngrok.connect(process.env.PORT).then((url) => {
  
  console.log(`Server forwarded to public url ${url}`);
});
