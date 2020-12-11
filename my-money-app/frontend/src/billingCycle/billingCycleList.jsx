import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()
    }
    
    renderRows() {

        const list = this.props.list || []

        return list.map(billingCycle => (
            <tr key={billingCycle._id}>
                <td>
                    {billingCycle.name}
                </td>
                <td>
                    {billingCycle.month}
                </td>
                <td>
                    {billingCycle.year}
                </td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(billingCycle)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(billingCycle)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }
    
    
    render() {
    
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

// o que vamos colocar no props
const mapStateToProps = state => ({
    // billingCycle -> está definido na lista de reducers
    list: state.billingCycle.list
})

// toda vez que o this.props.getList for chamado, será disparado para todos que implementam a lista
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)