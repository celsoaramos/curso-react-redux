const express = require('express')

module.exports = function(server) {

    // API Rotas
    const router = express.Router()

    // middleware para urls que comecem com /api
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    
    // registra todos os métodos registrados em todoService (get, post, put, delete)
    // ou seja, urls /api/todos registrará todos os HTTPS (get, post, put e delete)
    todoService.register(router, '/todos')
}