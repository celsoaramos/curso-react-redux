// mongoose -> abre a conexão com o mongo e envia os comandos
const mongoose = require('mongoose')

// usar a API Promise do próprio node
// serve para retirar a mensagem de advertência que a API de promise do mongoose foi descontinuada
mongoose.Promise = global.Promise

// url de conexão
module.exports = mongoose.connect('mongodb://localhost/todo')

