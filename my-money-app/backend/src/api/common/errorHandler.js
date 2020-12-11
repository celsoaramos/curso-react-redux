// _ é o padrão ao usar require lodash
const _ = require('lodash')
const nodeRestful = require('node-restful')

// assinatura de um middleware (req, res, next)
module.exports = (req, res, next) => {

    // lista de erros
    const bundle = res.locals.bundle

    // se tiver erro
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        // retorna o array com os erros
        res.status(500).json({ errors })
    } else {
        // para passar para o próximo middleware
        next()              
    }
}

// para retornar somente o array de mensagens
/* 
    nodeRestfulErrors é a estrutura de erros:
        {
            "errors": {
                "month": {
                    "message": "O '111' informado é maior que o limite máximo de '{MIN}'",
                    "name": "ValidatorError",
                    "properties": {
                        "max": 12,
                        "type": "max",
                        "message": "O '{VALUE}' informado é maior que o limite máximo de '{MIN}'",
                        "path": "month",
                        "value": 111
                    },
                    "kind": "max",
                    "path": "month",
                    "value": 111,
                    "$isValidatorError": true
                }
            },
            "_message": "BillingCycle validation failed",
            "message": "BillingCycle validation failed: month: O '111' informado é maior que o limite máximo de '{MIN}'",
            "name": "ValidationError"
        }

        error é a estrutura:
            {
                "message": "O '111' informado é maior que o limite máximo de '{MIN}'",
                "name": "ValidatorError",
                "properties": {
                    "max": 12,
                    "type": "max",
                    "message": "O '{VALUE}' informado é maior que o limite máximo de '{MIN}'",
                    "path": "month",
                    "value": 111
                },
                "kind": "max",
                "path": "month",
                "value": 111,
                "$isValidatorError": true
            }

        agora o erro será:
            {
                "errors": [
                    "O '111' informado é maior que o limite máximo de 12"
                ]
            }
*/
const parseErrors = (nodeRestfulErrors) => {
    // pode adicionar novos elementos apesar de ser constante
    const errors = []

    // percorre a lista de erros
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}