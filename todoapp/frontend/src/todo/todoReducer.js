const INITIAL_STATE = {
    description: '',
    list: []
}

// só é necessário quando o processo altera a state
// caso a chamada não altere a state, então podemos deixar somente dentro de todoAction
// por isso não foi mapeado aqui TODO_ADDED, TODO_DELETE, TODO_MARK_AS_DONE e TODO_MARK_AS_PENDING
// esses que não foram mapeados, chamam o TODO_SEARCHED, esse sim é mapeado e altera a state
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description: action.payload }
        
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }

        case 'TODO_CLEAR':
            return { ...state, description: ''}
        default: 
            return state
    }
}