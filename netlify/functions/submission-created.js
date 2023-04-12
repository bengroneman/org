exports.handler = async (event, context) => {
  const sgMail = require('@sendgrid/mail')
  const email = JSON.parse(event.body).payload.email
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: email,
    from: 'create@blueengineering.dev',
    template_id: "d-a8d4948874b8423a8c8bd3c89d5b7584"
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