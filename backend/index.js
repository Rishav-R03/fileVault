import express from 'express'
import dotenv from 'dotenv'
import homepage from './routers/home.route.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT  


app.use('/',homepage);
app.listen(PORT,()=>{
    console.log(`server running at port http://localhost:8000`)
})

