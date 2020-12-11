import { combineReducers } from 'redux'

// uma forma de chamar o reducer de formReducer
// é um 'alias' para o reducer
import { reducer as formReducer } from 'redux-form'

// componente de mensagem
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/BillingCycleReducer'

import AuthReducer from '../auth/authReducer'

// concatena todos os reducers da aplicação
const rootReducer = combineReducers({

    // os nomes a esquerda é o que serão usados nas classes jsx através do state
    // exemplo:
    /*
        mapStateToProps = state => ({
            list: state.billingCycle.list
        })
    */

    // DashboardReducer será o responsável por alterar/evoluir a state
    dashboard: DashboardReducer,
    // TabReducer será o responsável por alterar/evoluir a state
    tab: TabReducer,
    // BillingCycleReducer será o responsável por alterar/evoluir a state
    billingCycle: BillingCycleReducer,

    // form-redux
    form: formReducer,

    // toastrReducer para mensagem de toastr
    toastr: toastrReducer,

    // reducer da segurança do login
    auth: AuthReducer
})

export default rootReducer