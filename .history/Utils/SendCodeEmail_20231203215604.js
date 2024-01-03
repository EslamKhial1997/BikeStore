
const sendCode = ()=>{
    const transporter = nodemailer.createTransport("eslamKhial1997@gmail.com"[, defaults])
    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "eslamkhial1997@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    

}
module.exports =sendCode