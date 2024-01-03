const { Resend } = require("resend");

const resend = new Resend("re_XHqsBxsm_Gm66Pti6cMdJKK6McYPSEsm7");
const sendCode = async (options) => {
  console.log(options);
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: options.email,
    subject: options.subject,
    html: options.massage,
  });
  console.log(data);
  if (error) {
    return console.log(`The Error is ${error}`);
  }
};
module.exports = sendCode;
