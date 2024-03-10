import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Frirnd from './Frinds'

function App() {
  function Handle(){
    return alert ('click hoishe')
  }

  return (
    <>
    <Frirnd></Frirnd>
      <Counter></Counter>
      <h3>Vite + React</h3>
      <button onClick={Handle}>click me</button>
    
    </>
  )
}

export default App
