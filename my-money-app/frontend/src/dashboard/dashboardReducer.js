const INITIAL_STATE = {
    summary: {
        credit: 0,
        debt: 0
    }
}

// essa classe que irá controlar o state desse reducer !
export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            // apesar de só ter summary, caso acrescente outros valores o ...state fará sentido
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}