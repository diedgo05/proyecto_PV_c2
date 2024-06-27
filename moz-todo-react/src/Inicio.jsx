import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Imagen_interstellar from './components/atoms/Imagen/Imagen_interstellar'
import P_inter from './components/atoms/p/P_inter'
import H1 from './components/atoms/h1/H1'
import H2 from './components/atoms/h2/H2'
import A_oppen from './components/atoms/links/A_oppen'
import Span from './components/atoms/span/Span'

function Inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Imagen_interstellar/>
    <P_inter/>
    <H1/>
    <H2/>
    <A_oppen/>
    <Span/>
    </>
  )
}

export default Inicio
