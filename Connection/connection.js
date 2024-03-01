import mongoose from "mongoose"
import 'dotenv/config'

async function ConectaNaDatabase(){

  mongoose.connection(process.env.STRING_CONNECTION);
    
  return mongoose.connect()
}

export default ConectaNaDatabase