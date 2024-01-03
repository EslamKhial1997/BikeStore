const nodemailer = require("nodemailer");
const sendCode = async()=>{
  
const resend = new Resend('re_123456789');

(async function() {
  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'delivered@resend.dev',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  });

  if (error) {
    return console.log(error);
  }

  console.log(data);
})();


}
module.exports =sendCode