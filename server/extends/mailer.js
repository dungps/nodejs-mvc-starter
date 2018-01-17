const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

let secure = (process.env.MAIL_ENCRYPTION == 'true');

const mailer = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: secure,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  }
});

const send = (template, options, cb) => {
  options = options || {};

  if ( options && !options.from ) {
    options.from = `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_EMAIL}>`;
  }

  mailer.sendMail(options, cb);
}

module.exports.send = send;
module.exports.mailer = mailer;