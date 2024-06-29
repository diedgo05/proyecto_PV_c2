import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/molecules/Logo'
import Search_bar from './components/molecules/Search_bar'
import Card from './components/molecules/Card'

function Inicio() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Logo/>
    <Search_bar/>
    <Card/>
    </>
  )
}

export default Inicio
