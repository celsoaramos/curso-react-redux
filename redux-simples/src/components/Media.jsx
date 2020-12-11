import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'


const Media = props => {

    // usa o destructuring para mapear 
    //const { min, max } = props
    // OU
    const min = props.min
    const max = props.max

    console.log(props.min)
    console.log(props.max)

    return (
        <Card title="Media dos números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{ (max + min) / 2 }</strong>
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

export default connect(mapStateToProps)(Media)