import { useState, useEffect } from 'react'
import './index.css';

function App() {

  let [pokemonNumber, setPokemonNumber] = useState(1);
  let [pokemonName, setPokemonName] = useState('');
  let [pokemonPhoto, setPokemonPhoto] = useState('');

  function incrementarNumero(){
    setPokemonNumber(pokemonNumber  + 1);
  }

  function restarNumero(){
    setPokemonNumber(pokemonNumber  - 1);
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
  setPokemonPhoto(data.sprites.front_default)
 }

  return (
    <>
    <div className="w-full h-screen bg-violet-500 flex items-center justify-center">
      <div className="border h-72 w-72 text-center flex flex-col justify-center">
        <div className="flex items-center justify-center"><img src={pokemonPhoto} alt="pokemon-foto"  className='w-52' /></div>
        <div>{pokemonNumber} - {pokemonName}</div>
          <div className="flex justify-center gap-10">
           <button onClick={restarNumero} className={pokemonNumber == 0 ? 'hidden' : 'bg-red-500 w-16 h-auto'}>Back</button>
            <button button onClick={incrementarNumero} className="bg-red-500 w-16 h-auto">Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
