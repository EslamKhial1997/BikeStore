const { Resend } = require("resend");

const resend = new Resend("re_XHqsBxsm_Gm66Pti6cMdJKK6McYPSEsm7");
const sendCode = async (options) => {
  log
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: options.email,
    subject: options.subject,
    text: options.massage,
    html: "<strong>it works!</strong>",
  });
  console.log(data);
  if (error) {
    return console.log(`The Error is ${error}`);
  }
};
module.exports = sendCode;
