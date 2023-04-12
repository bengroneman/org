const sgMail = require("@sendgrid/mail");
exports.handler = async (event, context) => {
  const sgMail = require('@sendgrid/mail')
  const email = JSON.parse(event.body).payload.email
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email,
    from: 'create@blueengineering.dev',
    template_id: "d-a8d4948874b8423a8c8bd3c89d5b7584"
  }
  const msg2 = {
    to: 'create@blueengineering.dev',
    from: 'create@blueengineering.dev',
    subject: `${email} - submitted a form on your website`,
    html: `A form was submitted by ${email} on ${Date.now().toLocaleString()}`
  }
  let data;
  try {
    data = await sgMail.send(msg)
    await sgMail.send(msg2)
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