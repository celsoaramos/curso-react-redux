import React from 'react'

export default (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>

            {/* o + é para converter para valor numérico 
            o onChange é uma comunicacao indireta
            e o value uma comunicacao direta */}
            <input  id="passoInput" 
                    type="number" 
                    value={props.passo} 
                    onChange={ e => props.setPasso(+e.target.value)}/>
        </div>
    )
}