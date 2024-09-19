require('dotenv').config

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("Please see my portfolio at github.com")
})

app.get('/youtube', (req, res) => {
    res.send("I am learning Backend development from Chai and Code from Hitesh Sir ")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})