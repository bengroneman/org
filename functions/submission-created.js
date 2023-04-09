exports.handler = async event => {
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: JSON.parse(event.body).payload.email,
    from: 'create@blueengineering.dev',
    subject: 'Thank you for reaching out',
    html: '<strong>Hello there, my name is Ben Groneman, and I will review your submission within 48 hours.</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}