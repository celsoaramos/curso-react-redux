import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    // Hook INICIO
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }
    // HOOK FIM

    return (
        <div>
            <div>{nome} </div>
            <div><strong>{idade} </strong></div>
            <div>{nerd ? 'Verdadeiro' : 'False'} </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}