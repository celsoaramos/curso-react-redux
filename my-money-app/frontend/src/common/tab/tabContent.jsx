import React, { Component } from 'react'
import { connect } from 'react-redux'
import If from '../operador/if'

class TabContent extends Component {
    
    render() {

        // verifica se o id da aba clicada é igual ao id da state
        const selected = this.props.tab.selected === this.props.id

        // se o visible tiver um atributo com o nome do this.props.target então mostra 
        const visible = this.props.tab.visible[this.props.id]

        return (

            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    { this.props.children }
                </div>
            </If>

        )
    }
}

const mapStateToProps = state => ({
    tab: state.tab
})

export default connect(mapStateToProps)(TabContent)