import React, { Component } from 'react'
import { bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { selectTab } from './tabActions'

import If from '../operador/if'

class TabHeader extends Component {

    render() {

        // verifica se o id da aba clicada é igual ao id da state
        const selected = this.props.tab.selected === this.props.target

        // se o visible tiver um atributo com o nome do this.props.target então mostra 
        const visible = this.props.tab.visible[this.props.target]

        return (
            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    {/* this.props.target é o ID do conteúdo a ser exibido */}
                    <a href='javascript:;'
                        data-toggle='tab'
                        data-target={this.props.target}
                        onClick={() => this.props.selectTab(this.props.target)}>
                        <i className={`fa fa-${this.props.icon}`}></i>{ this.props.label }
                    </a>
                </li>
            </If>
        )
    }
}

// como retirar o dado da store e vai adicionar na props desse componente
// ou seja, agora conseguiremos usar props.tab com o valor da state.
// olhar a classe reducers.js dentro da pasta main
const mapStateToProps = state => ({
    // state.tab -> o tab está no reducer !
    tab: state.tab
})

// liga o selectTab ao componente
// toda vez que o selectTab for chamado, então será disparado para todos os reducers
// todos os componentes que utilizarem serão atualizados
// selectTab está disponível dentro de props
// automaticamente o dispatch é feito sempre que o selectTab for chamado
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)