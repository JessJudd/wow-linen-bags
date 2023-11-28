import { useState } from 'react'
import './App.scss'

import { LinenBagCalc } from './components/LinenBagCalc.jsx'

function App() {
  const [isImportant, setIsImportant] = useState("Yes"); // returns an array where the first item is the value of the state ("yes") and the 2nd item is a function
  // ^ array destructuring
  // func is commonly named Set(ValueName) where ValueName is the first item
  
  function handleClick() {
    setIsImportant("No")
  }

  return (
    <>
      <LinenBagCalc />
      <hr />
    </>
  )
}

export default App
