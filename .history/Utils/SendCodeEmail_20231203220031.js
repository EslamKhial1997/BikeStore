const nodemailer = require("nodemailer");
const sendCode = async()=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "eslamkhial1997@gmail.com",
          pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
        },
      });
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "eslamkhial1997@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    

}
module.exports =sendCode