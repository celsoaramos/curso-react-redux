// arquivo para configurar todos os reducers

import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducer,

    nomes: function(state, action) {
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

// configura um novo estado a partir do reducer

function storeConfig() {
    // cria o estado a partir dos reducers
    return createStore(reducers)
}

// exporta o aquivo
export default storeConfig