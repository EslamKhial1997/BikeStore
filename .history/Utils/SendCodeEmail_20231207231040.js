const { Resend } = require("resend");

const resend = new Resend("re_Qg2r2eNC_DAjj2rsxujY5AzzQmdHQtcxP");

resend.apiKeys.list();
const sendCode = async (options) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: options.email,
    subject: options.subject,
    html: `<strong>Hi ${options.email}</strong><h5>We Recevid A Request To Rest Password On Your Bike Store Account</h5> <h3>${options.digitCode} <s</h3> </h6>`,
  });
  console.log(data);
  if (error) {
    return console.log(`The Error is ${error}`);
  }
};
module.exports = sendCode;
