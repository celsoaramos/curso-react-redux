// em outras palavras, coloca em Todo o resultado disso: restful.model('BillingCycle', todoSchema) <-- billingCycle
const BillingCycle = require('./billingCycle')

// importa o errorHandler
const errorHandler = require('../common/errorHandler')

// cria uma API Rest padrão em cima da Url base
// ou seja, todos os métodos disponíveis, se não quiser fazer delete, basta retirar o delete
BillingCycle.methods(['get', 'post', 'put', 'delete'])

// aplicar o middleware criado (errorHandler)
// em post e put serão aplicados
BillingCycle.after('post', errorHandler).after('put', errorHandler)

// para validações
// por padrão o node-restful em um update (PUT) não devolve o objeto atualizado e sim o objeto antigo
// por isso o new: true para se alterar o sobrenome, devolver o objeto atualizado
// por padrão o node-restful não faz as validações no update (PUT) de acordo com o descrito em todo.js
BillingCycle.updateOptions({ new: true, runValidators: true})

// rota definida para ter count, poderia ser qq nome
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            // lança o retorno com um único atributo errors e o array com os erros
            res.status(500).json({errors: [error]})
        } else {
            /*
             para retornar 
                {
                    "value": 3
                }
             ao invés de:
                3
            */
            res.json({value})
        }
    })
})

// o código abaixo se deve a um erro, provavelmente de versão, entre as bibliotecas
// praticamente o método abaixo só mostra como o 'get' deve se comportar
BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if(err) {
            res.status(500).json({errors: [err]})
        } else {
            res.json(docs)
        }
    }).skip(req.query.skip).limit(req.query.limit)
})

// para criar a rota summary
BillingCycle.route('summary', (req, res, next) => {

    // aggregate função que recebe vários parâmetros, cada parâmetro é um objeto
    BillingCycle.aggregate([{ 
        // {$sum: "$credits.value"} -> Soma o valor dos créditos
        // {$sum: "$debt.value"}    -> Soma o valor dos débitos
        // o project vai fazer o seguinte, ignora todos os atribuos de BillingCycle e pega somente a soma de credito e débito
        // armazena a soma de creditos em credit e a soma de debitos em debt
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        // agrupa os valores baseado nos critérios de crédito e débito
        // é o groupBy do banco relacional
        // é obrigatório ter o _id
        // credit: {$sum: "$credit"} -> $credit é o credit da linha acima, soma todos os créditos da linha acima
        // debt: {$sum: "$debt"}     -> $debt é o debt da linha acima, soma todos os débitos da linha acima
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        // para remover o id null e colocar como 0, dessa form não vai aparecer no resultado final
        // credit: 1 e debt: 1 é para aparecerem no resultado final
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            // lança o retorno com um único atributo errors e o array com os erros
            res.status(500).json({errors: [error]})
        } else {
            // retorna o valor ou então 0 para credit e debt
            // result é um array, se la em cima o _id: null fosse por ano, então retornaria o somatório por ano
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

// exporta o Todo para a aplicação
module.exports = BillingCycle