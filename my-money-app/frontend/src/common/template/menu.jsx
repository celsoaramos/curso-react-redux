import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './MenuTree'

export default props => (

    <ul className="sidebar-menu">
        <MenuItem path='/' label='Dashboard' icon='dashboard'></MenuItem>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)