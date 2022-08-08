const express = require('express')
const dotenv = require('dotenv')
const mustache = require('mustache-express')
const path = require('path')

//criando a variável server que vai armazenar o express
const server = express()

//importandomain Routes - que sera o arquivo da nossa rota
const mainRoutes = require('./routes/index')

dotenv.config()

//config mustache
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.static(path.join(__dirname,'../public')))
//usando a rota importada
server.use(mainRoutes)
//escutando a porta que criamos em .env
server.listen(process.env.PORT)

