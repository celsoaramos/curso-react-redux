import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={ props.setIncrementador }>+</button>
            <button onClick={ props.setDecrementador }>-</button>
        </div>
    )
}