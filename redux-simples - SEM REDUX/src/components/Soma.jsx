import React from 'react'
import Card from './Card'


export default props => {

    // OUU
    // const min = props.min
    // const max = props.max

    const { min, max } = props

    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max }</strong>
                </span>
            </div>
        </Card>
    )
}