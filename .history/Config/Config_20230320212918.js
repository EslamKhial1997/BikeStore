
const dbCollection = ()=>{
    
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected!'));
}