import React, { cloneElement } from 'react';

export default props => {

    return (
        <div>
            {
                /* o sobrenome veio do pai App.jsx e foi passado para o FamiliaMembro 
                <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>
                <FamiliaMembro nome="Ana" { ...props } /* ou por spread que passaria todos os props *></FamiliaMembro> 
                <FamiliaMembro nome="Gustavo" sobrenome="Silva" /* é possível alterar o sobrenome para o filho *></FamiliaMembro>
                */
            }
            {/* OUUU { React.cloneElement} sem o import la em cima */}
            {/* { cloneElement(props.children, props) } */}
            {
                props.children.map((child, index) => {
                    return cloneElement(child, { ...props, key: index })
                })
            }
        </div>
    )
}