import React from 'react'
import './Button.css'

export default props => {

    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        // <button className={`
        //     button
        //     ${props.operation ? 'operation' : ''}
        //     ${props.double ? 'double' : ''}
        //     ${props.triple ? 'triple' : ''}
        // `}>
        //     { props.label }
        // </button>
        
        // OUUU
        <button 
        // e.target.innerHTML para pegar o conteúdo do elemento que será passado para o evento click
        // colocamos props.label já que o valor é o mesmo
        onClick={e => props.click && props.click(props.label)}
        className={classes}>
            { props.label }
        </button>
    )
}