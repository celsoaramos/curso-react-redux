import React from 'react'

// não é necessario colocar .jsx
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

import Card from './components/layout/Card'

import './App.css'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'

import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'

import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'

import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'

import Input from './components/formulario/Input'

import Contador from './components/contador/Contador'

import Mega from './components/mega/Mega'

// com export default pode retornar função anônima
// o _ é pq não vai usar nenhum parâmetro
// senão colocaria (props)
export default () => (
    <div className="App">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="Cards">

            <Card titulo="#13 - Mega" color="#B9006E">
                <Mega></Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado" color="#E45F56">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Condicional" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{nome: 'Fernando'}} />
            </Card>

            <Card titulo="#07 - Repetição 2" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                    <FamiliaMembro nome="Ana" ></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo" ></FamiliaMembro>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio 
                    min={5}
                    max={50} /* está entre {} para informar que é numérico*/> 
                </Aleatorio>
            </Card>
            
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    titulo="Nome do Aluno"
                    aluno="Pedro Silva"
                    nota={9.3} /* está entre {} para informar que é numérico*/ >
                </ComParametro>
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>

    </div>
)