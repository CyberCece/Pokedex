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
    <>
      <PokeTypes
        type = {poke.type}
      />      
      <button
        disabled = {prevButton}
        onClick={ () => setCurrentPoke((currentPk) =>  {
          if (currentPk === 1) {
            return currentPk
          }
          if (currentPk === 2) {
            setPrevButton(() => {return true})
          }
          return currentPk - 1
        })}>
          Prev Pokemon
      </button>
      <img src = {poke.sprite} alt = {poke.nombre}/>
      <button 
        onClick={ () => setCurrentPoke((currentPk) => {
          setPrevButton(() => {return false})
          return currentPk + 1
      })}>
        Next Pokemon
      </button>
      <div>{poke.no}</div>  
      <div>{poke.nombre}</div>
      <PokeAbilities
        abilities = {poke.abilities}
      />
      <PokeStats
        stats = {poke.stats}
      />
    </>
  );
}
export default Pokedex;