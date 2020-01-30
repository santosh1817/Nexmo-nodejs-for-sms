const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '',
  apiSecret: ''
});

const from = 'Nexmo';
const to = '917022591817';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);
