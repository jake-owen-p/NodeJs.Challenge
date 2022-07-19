const express = require('express')
const app = express()
const db = require('./utils/db')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/industries', (req, res) => {
    res.send(db.findAll())
})

app.get('/industries/:id', (req, res) => {
    res.send(db.findById(req.params.id))
})

module.exports = app