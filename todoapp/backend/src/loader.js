const server = require('./config/server')
require('./config/database')

// o resultado disso require('./config/routes') é um método
// em resumo o código abaixo chama a função exportada em routes.js
require('./config/routes')(server)
