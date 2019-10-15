'use strict';
require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: '123chall@gmail.com',
  from: 'jswens912@gmail.com',
  subject: 'hehehehehehe',
  text: 'calvin is a doody head',
  html: '<strong>A big ole doody head</strong>',
};
console.log(process.env.SENDGRID_API_KEY);
sgMail.send(msg);
