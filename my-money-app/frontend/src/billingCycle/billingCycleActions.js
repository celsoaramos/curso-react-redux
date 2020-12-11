import axios from 'axios'
import { toastr } from 'react-redux-toastr'

// graças ao redux-form, para resetar (limpar) basta passar o id
import { reset, reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {
    credits:[{}],
    debts:[{}]
}

export function getList() {

    const request = axios.get(`${BASE_URL}/billingCycles`)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

// função que não vai ser exportada pq não vai ser usada fora do módulo
// só vai ser usada dentro dessa classe
// method vai ser o method do http (post, put, delete)
function submit(values, method) {

    return dispatch => {

        // por causa do delete e do put que precisam do id
        // se não tiver, informará vazio e no link não será adicionado na URL
        const id = values._id ? values._id : ''

        // axios.post
        // axios['post']
        // ou axios[method]
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso !')

                // só pode passar o array para o dispatch graças ao redux-multi !
                // sem o multi, o dispatch só recebe uma action !
                // o init retorna um array
                dispatch(init())
            })
            .catch(e => {
                // no backend definimos que tem um atributo chamado errors que será um array 
                e.response.data.errors.forEach(error => toastr.error('Error', error));
            })
    }

}

export function showUpdate(billingCycle) {
    // graças ao redux-multi podemos retornar um array
    return [
        // para mostrar a aba update
        showTabs('tabUpdate'),
        // para selecionar a aba update
        selectTab('tabUpdate'),
        // inicializa o formulário passando os dados
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    // graças ao redux-multi podemos retornar um array
    return [
        // para mostrar a aba Delete
        showTabs('tabDelete'),
        // para selecionar a aba Delete
        selectTab('tabDelete'),
        // inicializa o formulário passando os dados
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {

    // array graças ao redux-multi
    return [
         // resetForm graças ao redux-form
         //resetForm('billingCycleForm'),
         // importada de TabActions para informar quais abas serão mostradas
         showTabs('tabList', 'tabCreate'),
         // importada de TabActions para selecionar a tab ativa
         selectTab('tabList'),
         // getList está nessa classe
         getList(),
         initialize('billingCycleForm', INITIAL_VALUES),
    ]
}

