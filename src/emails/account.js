const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'laventurepsu1@gmail.com',
    subject: 'Thanks for joining',
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};

const sendGoodByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'laventurepsu1@gmail.com',
    subject: 'We are sorry to see you go',
    text: `Let us know why you left?.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodByeEmail,
};
