import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
    
    // usa o destructuring para mapear 
    const { min, max } = props
    
    // OU
    //const min = props.min
    //const max = props.max

    console.log(props.min)
    console.log(props.max)

    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <Card title="Sorteio de um número" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ aleatorio }</strong>
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

export default connect(mapStateToProps)(Sorteio)