import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

// applyMiddleware -> para o middleware atuar entre o action e o reducer
import { applyMiddleware, createStore } from 'redux'
// promise -> para usar no middleware que atuará entre o action e o reducer
import promise from 'redux-promise'
// multi -> para a action chamar outra action em todoAction
import multi from 'redux-multi'
// thunk -> para chamar uma action dentro de uma action em todoAction
import thunk from 'redux-thunk'


import { Provider } from 'react-redux'
import reducers from './main/reducers'


// devtools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// chamada de 3 métodos para o middleware atuar entre o action e o reducer
// dessa forma o middleware vai esperar a promise da chamada axios.get(`${URL}?sort=-createdAt`) terminar
// é como se o middleware fizesse o .then que é a promise
// multi -> para a action chamar outra action em todoAction
// thunk -> para chamar uma action dentro de uma action em todoAction
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('app')
)