// cria praticamente todo nosso serviço REST (crud)
// cria como se fosse uma casca no mongoose fornecendo uma API REST praticamente pronta
// node-restul está dentro de node_modules
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: { type: String, required: true},
    done: { type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now }
})

// export esse módulo (ou arquivo) para ser usado no projeto
module.exports = restful.model('Todo', todoSchema)