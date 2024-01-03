const nodemailer = require("nodemailer");
const sendCode = async()=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "eslamkhial1997@gmail.com",
          pass: "UnbeKnow@009",
        },
      });
    const info={
        from: 'Bike Store', // sender address
        to: "eslamkhial1997@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      };
    await trans

}
module.exports =sendCode