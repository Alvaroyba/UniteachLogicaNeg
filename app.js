require('dotenv').config()
const express = require ('express')
const cors = require('cors')

const PORT = process.env.PORT
const app = express()

app.use(cors());
app.use(express.json());

app.use('/api', require('./app/routers'))

app.listen(PORT,()=>{
    console.log('Api Iniciada en el puerto',PORT)
})