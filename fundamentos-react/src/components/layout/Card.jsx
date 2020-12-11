import React from 'react'

import './Card.css'

export default props => {

    const cardStyle = {
        backgroundColor: props.color || '#4e02ff',
        borderColor: props.color || '#4e02ff',

    }

    return (

        /* 
            <div className="Card" style={{
                backgroundColor: props.color || '#4e02ff',
                borderColor: props.color || '#4e02ff',
            }}>
        */

        <div className="Card" style={cardStyle}>
            <div className="Title">{ props.titulo }</div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    )
}