const express = require('express');
const bodyParser = require('body-parser');

const nodeMailer = require('nodemailer');
const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'michaelmoreno.dev@gmail.co'
  }
})