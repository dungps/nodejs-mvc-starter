require('dotenv').config();

const mailer = require('../server/extends/mailer');

const mailOptions = {
  from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_EMAIL}>`,
  to: 'oryc9x@gmail.com',
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: "<b>Hello world?</b>"
}

mailer.sendMail(mailOptions, (err, info) => {
  if (err) return console.error(err);

  console.log("Message sent: %s", info.messageId);
  console.log('Preview URL: %s', mailer.getTestMessageUrl(info));
});