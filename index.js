const express = require('express')
const app = express()
const books = require('./data')
const _ = require('lodash')

const port = 3000

app.listen(3000, () => {
    console.log("service started")
})


app.get('/api/books', (req, resp) => {
    resp.json(books)
})

app.get('/api/books/available', (req, resp) => {
    resp.json(_.filter(books, { is_available: true }))
})

app.get('/api/books/issued', (req, resp) => {
    resp.json(_.filter(books, { is_available: false }))
})



app.get('/api/books/author=Ali', (req, resp) => {

    resp.json(_.filter(books, { author: "Ali" }))
})