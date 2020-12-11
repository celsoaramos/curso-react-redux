import React, { Component } from 'react'
// reduxForm serve para "ligar" o formulário ao redux
import { reduxForm, Field, formValueSelector } from 'redux-form' 

// INICIO - redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'
// FIM - redux

import LabelAndInput from '../common/form/labelAndInput'
import Summary from './summary'
import ItemList from './itemList'

class BillingCycleForm extends Component {
    
    calculateSummary() {
        // t -> total
        // v -> valor total
        const sum = (t, v) => t + v

        return {
            // o + é uma forma de converter uma string em numérico
            sumOfCredits: this.props.credits
                                            .map(c => +c.value || 0) // só transforma as strings em numéricos
                                            .reduce(sum), // faz a soma dos créditos

            // o + é uma forma de converter uma string em numérico
            sumOfDebts: this.props.debts
                                        .map(d => +d.value || 0) // só transforma as strings em numéricos
                                        .reduce(sum) // faz a soma dos débitos
        }
    }

    render() {

        // graças ao reduxForm !
        const { handleSubmit, readOnly, credits, debts } = this.props

        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (

            <form role='form' onSubmit={ handleSubmit }>
                <div className="box-body">
                    {/* Field está relacionado o reduxForm */}
                    <Field name="name"  component={LabelAndInput} label='Nome' placeholder='Informe o nome' cols='12 4' readOnly={readOnly}/>
                    <Field name="month" component={LabelAndInput} label='Mês'  placeholder='Informe o mês'  cols='12 4' readOnly={readOnly} />
                    <Field name="year"  component={LabelAndInput} label='Ano'  placeholder='Informe o Ano'  cols='12 4' readOnly={readOnly} />

                    <Summary credit={sumOfCredits} debt={sumOfDebts} ></Summary>

                    <ItemList cols='12 6' field='credits' legend='Créditos' readOnly={readOnly} list={credits}></ItemList>
                    <ItemList cols='12 6' field='debts'   legend='Débitos'  readOnly={readOnly} list={debts} showStatus={true}></ItemList>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type="button" className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>

        )
    }
}


// destroyOnUnmount dessa forma o formulário não vai ser destruído para ser reconstruído
// dessa forma vai facilitar o reuso já que esse form é reutilizado
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

// passa o id do FORM que vc quer selecionar um valor
const selector = formValueSelector('billingCycleForm')
// o selector vai pegar a lista de credits da state e colocar na variável credits que estará disponível dentro de props
// para pegar algum valor de dentro do formulário controlado pelo redux
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts:   selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)