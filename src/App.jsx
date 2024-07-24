import { useState, useEffect } from 'react'

function App() {

  let [pokemonNumber, setPokemonNumber] = useState(0);
  let [pokemonName, setPokemonName] = useState('');

  function incrementarNumero(){
    setPokemonNumber(pokemonNumber  + 1);
  }

 useEffect(() =>{
    console.log('valor al catualizar el estado: ' + pokemonNumber);
    //Aqui debemos llamare al API
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    //.then(result => result.json())
    //.then(data=>setPokemonName(data.name))

    searchPokemon(pokemonNumber)
 }, [pokemonNumber]);

 let searchPokemon = async pokemonNumber=>{
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
  const data = await response.json()
  setPokemonName(data.name)
 }

  return (
    <>
      <button onClick={incrementarNumero}>Next</button>
      <div>{pokemonNumber} - {pokemonName}</div>
    </>
  )
}

export default App
