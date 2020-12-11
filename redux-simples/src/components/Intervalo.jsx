import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

import './Intervalo.css'

import React from 'react'
import Card from './Card'


const Intervalo = props => {
    
    // usa o destructuring para mapear 
    const { min, max } = props
    
    // OU
    //const min = props.min
    //const max = props.max

    console.log(props.min)
    console.log(props.max)

 

    return (
        <Card title="Intervalo de números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={ min } onChange={ e => props.alterarMinimo(+e.target.value) } />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={ max } onChange={ e => props.alterarMaximo(+e.target.value) } />
                </span>
            </div>
        </Card>
    )
}

// mapeia o estado para os props desse componente
// state é a storeConfig.js
function mapStateToProps(state) {
    return  {
        // recupera o valor min e max
        min: state.numeros.min,
        max: state.numeros.max
    }
}

// função para mudar o storeConfig
function mapDispatchToProps(dispatch) {
    return {
        // nome qq para a funcao
        alterarMinimo(novoNumero) {
            // action creator (numeros.js)
            // retorna uma action
            const action = alterarNumeroMinimo(novoNumero)

            // dispara para todos os reducers que teve alteração
            dispatch(action)
        },

        alterarMaximo(novoNumero) {
            // action creator (numeros.js)
            // retorna uma action
            const action = alterarNumeroMaximo(novoNumero)

            // dispara para todos os reducers que teve alteração
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)

