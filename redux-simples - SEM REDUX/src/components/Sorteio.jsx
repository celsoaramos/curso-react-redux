import React from 'react'
import Card from './Card'


export default props => {
        // OUU
    // const min = props.min
    // const max = props.max

    const { min, max } = props

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