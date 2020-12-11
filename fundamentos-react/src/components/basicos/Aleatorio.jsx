import React from 'react'

export default props => {

    // const min = props.min
    // const max = props.max

    const { min, max } = props

    const numeroAleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>Número aleatório entre {min} e {max}</h2>
            <p>{numeroAleatorio}</p>
        </div>
    )
}