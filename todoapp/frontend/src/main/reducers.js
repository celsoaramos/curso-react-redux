import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    // todo é o nome do estado da aplicação controlado pelo redux
    todo: todoReducer

})

export default rootReducer