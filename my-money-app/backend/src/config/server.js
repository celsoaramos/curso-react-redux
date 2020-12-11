// porta da API REST
const port = 3003

/*

TODO REQUIRE É SINGLETON. 
O REQUIRE RETORNA A INSTÂNCIA ÚNICA

*/

// para permitir o CORS
const allowCors = require('./cors')

// para funcionar a paginacao http://localhost:3003/api/billingCycles?skip=0&limit=1
const queryParser = require('express-query-int')

// faz o parser no body da requisição
const bodyParser = require('body-parser')

// para utilizar o express (servidor web/rest)
const express = require('express')
// instância do express para sempre retornar uma nova instância do express
const server = express()

// para o middleware interceptar todas as requisições
server.use(bodyParser.urlencoded({ extended: true }))

// se fizesse assim seria para toda requisição que começa com /ola
//server.use('/ola', bodyParser.urlencoded({ extended: true }))

// para o middleware interceptar todo body que chegar com json
server.use(bodyParser.json())

// outro middleware para permitir o Cors
server.use(allowCors)

// outro middleware para funcionar a paginação
server.use(queryParser())

// para o servidor ficar ouvindo a porta 3003
server.listen(port, function() {
    console.log(`backend rodando na porta ${port}.`)
})

// exporta o server
module.exports = server