const { Resend } = require("resend");

const resend = new Resend("re_6heAmNzW_MsFKEtVhovxynU4PHFNJnThG");
const sendCode = async (options) => {
  console.log(options);
  const { data, error } = await resend.emails.send({
    from: "Bike Store",
    to: "eslamkhial1997@gmail.com",
    subject:" options.subject",
    html: `<strong>Hi </strong><h5>We Recevid A Request To Rest Password On Your Bike Store Account</h5> <h3>${options.digitCode}</h3> Please Enter This Code <h6>Thanks Dear</h6>`,
  });
  console.log(data);
  if (error) {
    return console.log(`The Error is ${error}`);
  }

};
module.exports = sendCode;
