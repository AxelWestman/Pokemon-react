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
    <div className="w-full h-screen  flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="rounded	 h-4/6 w-96 text-center flex flex-col justify-center items-center bg-pixel bg-cover">
      <div className="mb-3 font-dmserif  text-yellow-300 text-5xl">{pokemonName.toUpperCase()}</div>
        <div className="flex items-center justify-center w-80 h-96"><img src={pokemonPhoto} alt="pokemon-foto"  className='w-full mt-40' /></div>
          <div className="flex justify-center gap-10 mt-10">
           <button onClick={restarNumero} className={pokemonNumber == 1 ? 'hidden' : 'bg-yellow-300 w-16 h-12 rounded font-dmserif text-lg'}>BACK</button>
            <button button onClick={incrementarNumero} className="bg-yellow-300 w-16 h-12 rounded  font-dmserif text-lg">NEXT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
