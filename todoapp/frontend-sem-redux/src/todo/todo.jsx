import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import axios from 'axios'

// URL do backend
const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {

    // para amarrar para o this ser esse component Todo
    constructor(props) {
        super(props)

        // cria o estado e altera o estado através do set
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

        this.refresh()
    }

    handleChange(e) {
        // muda o state
        // ...this.state => "coloca" os dados do state, nesse caso a description e a list
        // description: altera a descrição de acordo com o que retornou no input ( e )
        this.setState({...this.state, description: e.target.value})
    }

    refresh(description = '') {

        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
             .then(resp => {
                 this.setState({...this.state, description, list: resp.data})
             })
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description}).then( resp => {
            this.refresh()
        })
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true})
             .then( resp => {
                 this.refresh(this.state.description)
             })
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false})
        .then( resp => {
            this.refresh(this.state.description)
        })
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
             .then( resp => {
                 this.refresh(this.state.description)
             })
    }

    handleClear() {
        this.refresh()
    }

    render () {
        return (
            <div>
                <PageHeader name="Tarefas" small="cadastro" />
                {/* passa a função para TodoForm que então passará para IconButton*/ }
                <TodoForm handleAdd={this.handleAdd}
                          handleChange={this.handleChange} 
                          handleSearch={this.handleSearch}
                          handleClear={this.handleClear}
                          description={this.state.description} />

                <TodoList list={this.state.list} 
                          handleRemove={this.handleRemove} 
                          handleMarkAsDone={this.handleMarkAsDone} 
                          handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}