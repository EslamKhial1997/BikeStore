const { Resend } = require("resend");




const resend = new Resend('re_oRbuQVrF_FNkmKPdZ2zHjTutjNAHdxGoK');
const sendCode = async(digist )=>{



  const { data, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: ,
    subject: `Hello ${email}`,
    html: '<strong>it works!</strong>'
  }); 
  console.log(data);
  if (error) {
    return console.log(`The Error is ${error}`);
  }

  



}
module.exports =sendCode