import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'


// applyMiddleware -> para o middleware atuar entre o action e o reducer
import { applyMiddleware, createStore } from 'redux'
// promise -> para usar no middleware que atuará entre o action e o reducer
import promise from 'redux-promise'
// multi -> para a action chamar outra action nas classes de actions
import multi from 'redux-multi'
// thunk -> para chamar uma action dentro de uma action nas classes de actions
import thunk from 'redux-thunk'

import Routes from './main/routes'
import reducers from './main/reducers'


// devtools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// cria a store a partir do js que combina todos os reducers
// chamada de 3 métodos para o middleware atuar entre o action e o reducer
// dessa forma o middleware vai esperar a promise da chamada axios.get(`${URL}?sort=-createdAt`) terminar
// é como se o middleware fizesse o .then que é a promise
// multi -> para a action chamar outra action nas classes de actionsn
// thunk -> para chamar uma action dentro de uma action nas classes de actions
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <Routes></Routes>
    </Provider>,
    document.getElementById('app')
)