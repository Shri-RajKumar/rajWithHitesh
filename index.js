require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req,res) =>{
    res.send('Hello World!')
})

app.get('/raj', (req,res) =>{
    res.send('rajWithHitesh')
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port ${port}`)
})