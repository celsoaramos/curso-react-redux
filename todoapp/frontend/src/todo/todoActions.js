import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

// cria o evento.
// quem dispara é o dispatch no método mapDispatchToProps
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {

    // graças ao redux-thunk
    return (dispatch, getState) => {
        // pegar a description direto do state
        const description = getState().todo.description

        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
                             .then(resp => dispatch({ 
                                 type: 'TODO_SEARCHED',
                                 payload: resp.data
                             }))
    }
}

// nao retorma mais uma action e sim um método dispatch
// graças ao thunk que foi instalado
export const add = description => {
    // dispatch é quem vai enviar a action para todos os reducers
    // o .then só é possível graças ao thunk
    return dispatch => {
        // { decription } usa a versão nova do ES2005
        // antes teria que ser { description: description }
        // como é o mesmo nome, usa-se somente { description }
        axios.post(URL, { description })
             .then(resp => dispatch(clear()))
             // graças ao multi-redux
             .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
             .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
             .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
             .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    // graças ao redux-multi é possível retornar o type search para o todoReducer e ainda assim usar o search
    return [
        {
            type: 'TODO_CLEAR'
        }, 
        search()
    ]
}