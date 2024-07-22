import { useState, useEffect } from 'react'

function App() {

  let [number, setNumber] = useState(0);

  function incrementarNumero(){
    setNumber(number  + 1);
  }

  return (
    <>
      <button onClick={incrementarNumero}>Next</button>
      <div>{number}</div>
    </>
  )
}

export default App
