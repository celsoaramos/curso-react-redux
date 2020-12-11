import React from 'react'

export default function ComParametro(props) {

    // as props são somente leitura !
    // props.nota = Math.ceil(props.nota) // ERRADO !!!
    const nota = Math.ceil(props.nota) // CORRETO !!

    const status = props.nota >= 7 ? 'Aprovado' : 'Em Recuperação'

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                tem nota 
                <strong> { nota } </strong>
                e está
                <strong> { status } </strong>!
            </p>
        </div>
    )
}