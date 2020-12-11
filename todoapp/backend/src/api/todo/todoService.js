// em outras palavras, coloca em Todo o resultado disso: restful.model('Todo', todoSchema)
const Todo = require('./todo')

// cria uma API Rest padrão em cima da Url base
Todo.methods(['get', 'post', 'put', 'delete'])

// para validações
// por padrão o node-restful em um update (PUT) não devolve o objeto atualizado e sim o objeto antigo
// por isso o new: true para se alterar o sobrenome, devolver o objeto atualizado
// por padrão o node-restful não faz as validações no update (PUT) de acordo com o descrito em todo.js
Todo.updateOptions({ new: true, runValidators: true})

// exporta o Todo para a aplicação
module.exports = Todo
