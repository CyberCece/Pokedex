import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PokeAbilities from './components/PokeAbilities';
import PokeTypes from './components/PokeTypes';
import PokeStats from './components/PokeStats';

function Pokedex() {
  
  const [currentPoke, setCurrentPoke] = useState(1)
  const [prevButton, setPrevButton] = useState(true)
  const [poke, setPoke] = useState({})
  const [loading, setLoading] = useState(true)
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`

  useEffect(() => {
    setLoading(true)
    axios.get(baseUrl + currentPoke)
    .then((response) => {
      let data = response.data
      const pokeData= {
        nombre: data.name,
        no: data.id,
        type: data.types,
        sprite: data.sprites.other['official-artwork'].front_default,
        abilities: data.abilities,
        stats: data.stats
      }
      setLoading(false)
      setPoke(()=>{
        return pokeData
      }) 
      console.log(pokeData)
    })
  }, [currentPoke, baseUrl])

  if (loading) return "Loading..."

  return(
    <div className='flex flex-col border-8 border-red-900 bg-red-500 p-3 rounded-2xl justify-center content-center'>
      <div className='flex flex-row justify-around'>
        <div>{poke.no}</div>  
        <div>{poke.nombre}</div>
      </div>
      <div className = 'flex flex-row justify-center'>    
        <svg
          className='w-10 ' 
          disabled = {prevButton}
          onClick={ () => setCurrentPoke((currentPk) =>  {
            if (currentPk === 1) {
              return currentPk
            }
            if (currentPk === 2) {
              setPrevButton(() => {return true})
            }
            return currentPk - 1
          })}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
        </svg>
        <div>
        <PokeTypes
          type = {poke.type}
        />
          <img 
          className='border-[20px] bg-blue-300 rounded-xl rounded-bl-[100px]'
          src = {poke.sprite} alt = {poke.nombre}/>
        </div>        
        <svg
          className='w-10' 
          onClick={ () => setCurrentPoke((currentPk) => {
            setPrevButton(() => {return false})
            return currentPk + 1
          })} 
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </div> 
      <div className='flex justify-around '>
        <PokeAbilities
          abilities = {poke.abilities}
        />
        <PokeStats
          stats = {poke.stats}
        />
      </div> 
    </div>
  );
}
export default Pokedex;