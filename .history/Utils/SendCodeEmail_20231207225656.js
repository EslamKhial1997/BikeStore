const { Resend } = require("resend");

const resend = new Resend("re_6heAmNzW_MsFKEtVhovxynU4PHFNJnThG");
const sendCode = async (options) => {
  console.log(options);
  const { data, error } = await resend.emails.send({
    from: "Bike Store",
    to: "eslamkhial1997@gmail.com",
    subject:" options.subject",
    html: ``,
  });
  console.log(data);
  if (error) {
    return console.log(`The Error is ${error}`);
  }

};
module.exports = sendCode;
