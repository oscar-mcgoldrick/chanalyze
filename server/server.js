const { join } = require('node:path')
const express = require('express')
const hbs = require('express-handlebars')

// Routes from other routes files go here //

// Creating the server 

const server = express()
module.exports = server

// Server config 

const publicFolder = join(__dirname, 'public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', join(__dirname, 'views'))

// Define the routes here 