const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

// quando chegar URL no padrão urlencoded, o bodyParser atuará
// envio de formulário tem urlencoded
// todas as requisições passarão por esse middleware
server.use(bodyParser.urlencoded({ extended: true }))
// outro middleware e também toda requisição passará por aqui
server.use(bodyParser.json())
// outro middleware para permitir o Cors
server.use(allowCors)

server.listen(port, function() {
    console.log(`backend rodando na porta ${port}`)
})

module.exports = server