import React, { Component } from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search, add, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        
        this.keyHandler = this.keyHandler.bind(this)
    }


    // só funciona em componente baseado em classe !
    // método do ciclo de vida do react
    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {

        // funcao do ES2005
        // extraia do atributo props: o add, search e description
        const { add, clear, search, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    // obrigatório por ser componente baseado em classe
    render() {

        // funcao do ES2005
        // extraia do atributo props: o add, search e description
        // add e search são action creator
        const { add, search, description } = this.props

        return (
            <div role="form" className="todoForm">

                <Grid cols='12 9 10'>
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler} />
                </Grid>


                <Grid cols='12 3 2'>
                    <IconButton style="primary"
                        icon="plus"
                        // como não está passando evento e o resultado de onClick tem que ser uma função
                        // então chama
                        onClick={() => add(description)} >
                    </IconButton>
                    <IconButton style="info"
                        icon="search"
                        onClick={search} >
                    </IconButton>
                    <IconButton style="default"
                        icon="close"
                        onClick={this.props.clear} >
                    </IconButton>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)