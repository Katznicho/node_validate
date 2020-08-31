const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

//middleaware
app.use(cors())
app.use(express.json())
//required files
const accountRouter = require('./Routes/routes')
 app.use('/api/users' , accountRouter) 
    
//connect to db
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})
const connection = mongoose.connection
connection.once("open", () => console.log(process.env.DB))
const name = "nicolas";
//connect to a port
const PORT = process.env.PORT
app.listen(PORT , ()=>console.log(`Running on port ${PORT}`))