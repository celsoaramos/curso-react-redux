import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'


// componente baseado em função
export default props => (

    <div className="wrapper">
        <Messages></Messages>
        
        <Header></Header>
        <SideBar></SideBar>
        <div className="content-wrapper">
            
            {props.children}
        </div>
        <Footer></Footer>
        
    </div>


)