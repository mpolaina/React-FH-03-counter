import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'


const divRoot = document.querySelector('#root')

ReactDOM.render( <CounterApp value={ 10 }/> , divRoot )
// ReactDOM.render( <PrimeraApp saludo="Hola Props"/> , divRoot )