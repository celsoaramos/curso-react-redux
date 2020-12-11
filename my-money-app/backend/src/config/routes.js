const express = require('express')
const auth = require('./auth')

// receber o server como parâmetro
// como é singleton não pode criar outro parâmetro
module.exports = function (server) {
    
    // INÍCIO - Rotas protegidas por Token JWT
    const protectedApi = express.Router()
     // URL base para todas as rotas
    server.use('/api', protectedApi)
    protectedApi.use(auth)
    
    // rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')

    // registra a URL /billingCycles
    // ou seja, a url será /api/billingCycles
    BillingCycle.register(protectedApi, '/billingCycles')
    // FIM - Rotas protegidas por Token JWT

    
    // INÍCIO - Rotas abertas
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/AuthService')
    // localhost:3003/oapi/login
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
    // FIM - Rotas abertas
}