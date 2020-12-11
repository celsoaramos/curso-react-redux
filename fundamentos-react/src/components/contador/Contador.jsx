import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    incrementador = () => {
        // funcao herdada pelo extends Component
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrementador = () => {
        // funcao herdada pelo extends Component
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            // event.target.value retorna String
            // o + é para converter para number (int)
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo } setPasso={this.setPasso}></PassoForm>
                <Botoes setIncrementador={this.incrementador} setDecrementador={this.decrementador}></Botoes>
            </div>
        )
    }
}

export default Contador