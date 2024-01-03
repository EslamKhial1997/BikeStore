const { Resend } = require("resend");




const resend = new Resend('re_123456789');
const sendCode = async()=>{



  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'eslamkhial1997@gmail.com',
    subject: 'Hello World',
    html: '<strong>it works!</strong>'
  }); 

  if (error) {
    return console.log(error);
  }

  console.log(data);



}
module.exports =sendCode