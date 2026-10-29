import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const inicio=[
    {titulo:"Biblioteca Digital Lectura Viva"},
    {subtitulo:"Descubre nuevas ideas a través de la lectura"}
    
  ]

  const final=[
    {anio:"2026"},
    {nombre:"Biblioteca Digital Lectura Viva"}
  ]


  return (
    <>
    <Header hea={inicio}/>
    <Nav/>
    <div className="contenedor">
      <Main/>
      <Aside/>
    </div>
      <Footer termino={final}/>
    </>
      

  )
}

export default App
