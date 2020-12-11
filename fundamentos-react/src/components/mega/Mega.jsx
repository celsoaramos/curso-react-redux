import React, {useState} from 'react'
import './Mega.css'

export default (props) => {
    
    function sortear(qtde){
        let numerosMega = new Set()
        while(numerosMega.size < qtde){
            numerosMega.add(parseInt(Math.random() * 60))
        }
        return [...numerosMega]
    }
    console.log(sortear(6).sort((a, b) => a-b))

    // como se criasse o atributo qtde e o setQtde
    // useState é para usar o setQtde
    // o input type="text" ou qq outro para ser alterado precisa do set e do useState
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = sortear(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{ numeros.join(' ') }</h3>
            <div>
                <label>Quantidade de Números</label>

                <input type="number" 
                        min="6"
                        max="10"
                        value={ qtde } 
                        onChange={ (e) => {
                            setQtde(+e.target.value)
                            setNumeros(sortear(+e.target.value).sort((a, b) => a-b))
                        }} />
            </div>
            <button onClick={ _ => setNumeros(sortear(qtde).sort((a, b) => a-b))}>Gerar Números</button>
        </div>
    )
}