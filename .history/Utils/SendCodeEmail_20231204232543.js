const { Resend } = require("resend");

const resend = new Resend("re_KhsHwvc2_3dvQF7A7B8BCyqJyLRxuA7KX");
const sendCode = async (options) => {
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
