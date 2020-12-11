import React from 'react'
import produtos from '../data/produtos'

import './TabelaProdutos.css'

export default props => {

    // const linhas = produtos.map((produto) => {
    //     return (
            
    //         <tr key={produto.id}>
    //             <td>
    //                 {produto.id}
    //             </td>
    //             <td>
    //                 {produto.nome}
    //             </td>
    //             <td>
    //                 {produto.preco}
    //             </td>
    //         </tr>
    //     )
    // })

    function getLinhas() {
        return produtos.map((produto, index) => {
            return (
                <tr key={produto.id} className={ index % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }


    return (
        <div className="TabelaProdutos">
            <table border='1'>
                <thead>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    { getLinhas() }
                </tbody>
            </table>
        </div>

    )
}