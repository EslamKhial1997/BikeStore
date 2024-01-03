const sendCode = ()=>{
    const transporter = nodemailer.createTransport("eslamKhial1997@gmail.com"[, defaults])
    transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      }[, callback])

}
module.exports =sendCode