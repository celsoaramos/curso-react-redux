import React, { Component } from 'react'

import { connect } from 'react-redux'
import { create, update, remove, init } from './billingCycleActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabContent from '../common/tab/tabContent'
import TabHeader from '../common/tab/tabHeader'

import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'

import { bindActionCreators } from 'redux'


class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {

        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle="Cadastro"></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BillingCycleList></BillingCycleList>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                {/* ao submeter submete para o método create */}
                                <BillingCycleForm onSubmit={this.props.create} submitClass='primary' submitLabel='Incluir'></BillingCycleForm>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BillingCycleForm onSubmit={this.props.update} submitClass='info' submitLabel='Alterar'></BillingCycleForm>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BillingCycleForm onSubmit={this.props.remove} submitClass='danger' submitLabel='Excluir'readOnly={true}></BillingCycleForm>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

// vai colocar o select tab dentro do props desse componente
const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)