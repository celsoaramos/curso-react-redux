import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import ValueBox from '../common/widgets/valueBox'

// componente baseado em classe
class Dashboard extends Component {

    // sempre que o componente for carregado, será chamado esse método
    componentWillMount() {
        // chamada do actionCretor
        this.props.getSummary()
    }

    render() {

        // props.summary graças ao redux que recuperou do state
        // olhar o método mais abaixo mapStateToProps
        // aqui foi usado o ES2015 para separar de summary credit e debt
        // se olharmos o reducers.js dentro de main, summary tem dois atributos, credit e debt
        const { credit, debt } = this.props.summary

        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 1.0'></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color='green' icon='bank' value={`R$ ${credit}`} text='Total de créditos'></ValueBox>
                        <ValueBox cols="12 4" color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de débitos'></ValueBox>
                        <ValueBox cols="12 4" color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor consolidado'></ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}

// como retirar o dado da store e vai adicionar na props desse componente
// ou seja, agora conseguiremos usar props.summary com o valor da state.
// olhar a classe reducers.js dentro da pasta main
const mapStateToProps = state => ({
    summary: state.dashboard.summary
})


// liga o getSummary ao componente
// toda vez que o getSummary for chamado, então será disparado para todos os reducers
// todos os componentes que utilizarem serão atualizados
// getSummary está disponível dentro de props
// automaticamente o dispatch é feito sempre que o getSummary for chamado
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)