const { Resend } = require("resend");




const sendCode = async()=>{
  
  const resend = new Resend('re_123456789');
  const app = express();

  app.get('/', async (req: RRReque, res: Response) => {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Hello World',
      html: '<strong>it works!</strong>',
    });
  
    if (error) {
      return res.status(400).json(error);
    }
  }

  )
}
module.exports =sendCode