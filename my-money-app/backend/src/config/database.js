const mongoose = require('mongoose')
// para o mongoose utilizar a API de Promise do Node
mongoose.Promise = global.Promise
// exporta a conexão com a URL do banco do Mongo
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

// traduzir os erros
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo de '{MIN}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é valor válido para o atributo '{PATH}'"