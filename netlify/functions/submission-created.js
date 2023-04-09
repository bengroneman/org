exports.handler = async (event, context) => {
  const sgMail = require('@sendgrid/mail')
  const email = JSON.parse(event.body).email
  console.log(email)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'bluegroneman10@gmail.com',
    from: 'create@blueengineering.dev',
    subject: 'Thank you for reaching out',
    html: '<strong>Hello there, my name is Ben Groneman, and I will review your submission within 48 hours.</strong>',
  }
  let data;
  try {
    data = await sgMail.send(msg)
  } catch (error) {
    return {
        statusCode: 500,
        body: JSON.stringify({
          error: error.message
        })
      }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}