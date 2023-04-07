import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PokeAbilities from './components/PokeAbilities';
import PokeTypes from './components/PokeTypes';
import PokeCharts from './components/PokeChart';
import PokeFinder from './components/PokeFinder';
import NameFinder from './components/NameFinder';



function Pokedex() {
  
  const [currentPoke, setCurrentPoke] = useState(1)
  const [currentName, setCurrentName] = useState("bulbasaur")
  const [prevButton, setPrevButton] = useState(true)
  const [poke, setPoke] = useState({})
  const [loading, setLoading] = useState(true)
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`

  useEffect(() => {
    axios.get(baseUrl + currentName)
    .then((response) => {
      let pokeNo = response.data.id
      setCurrentPoke(() => {
        return pokeNo
      })
    })
    .catch(()=>{
      setCurrentPoke(() => {
        return 0
      })
    })
  }, [currentName, baseUrl])

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
      setPoke(()=>{
        return pokeData
      })
      setCurrentName(() => {
        return pokeData.nombre
      })
      
      setLoading(false)
      
    })
    .catch(() => {
      const defStats = [
        {base_stat:6,
        stat:{name:"hp"}},
        {base_stat:6,
        stat:{name:"attack"}},
        {base_stat:6,
        stat:{name:"defense"}},
        {base_stat:6,
        stat:{name:"special-attack"}},
        {base_stat:6,
        stat:{name:"special-defense"}},
        {base_stat:6,
        stat:{name:"speed"}}
      ]
      const pokeData= {
        nombre: "MissingNo",
        no: "#????",
        type: [{type:{name: "????"}}],
        sprite: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6a87476a-2763-4dd3-94a9-82446b9b1e55/d5je5dv-838570c6-655d-4392-8f3a-f2d17949ea05.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZhODc0NzZhLTI3NjMtNGRkMy05NGE5LTgyNDQ2YjliMWU1NVwvZDVqZTVkdi04Mzg1NzBjNi02NTVkLTQzOTItOGYzYS1mMmQxNzk0OWVhMDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RkrmzuFWq2VbaIjM9SqyU0FwfrvGAvCgCvYjbrs_UVM",
        abilities: [{ability:{name: "Yet to be discovered"}}],
        stats: defStats
      }
      setCurrentName(() => {
        return pokeData.nombre
      })
      setPoke(()=>{
        return pokeData
      })
      
      setLoading(false)
    })
  }, [currentPoke, baseUrl])

  if (loading) return <div className='text-black'>"Loading..."</div>

  return(
    <div className='flex flex-col border-8 border-red-900 bg-red-500 p-3 rounded-2xl justify-center content-center'>
      <div className='flex text-3xl pb-3 pb flex-row  justify-around '>
        {/* <div className='flex p-2 text-4xl border-8 rounded-full border-slate-50 bg-cyan-500'>#{poke.no}</div> */}
        <PokeFinder
          currentPoke={currentPoke}
          setCurrentPoke={setCurrentPoke}
        />
        <NameFinder 
          currentName={currentName}
          setCurrentName={setCurrentName}
        />  
        {/* <div className='flex text-4xl pt-4 capitalize'>{poke.nombre}</div> */}
      </div>
      <div className = 'flex pb-5 flex-row justify-center '>    
        <svg
          className='w-10 cursor-pointer' 
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
        <div className='flex flex-col relative'>
          <PokeTypes
            type = {poke.type}
          />
          <img 
          className='flex max-w-[475px] w-full border-[20px] border-slate-50 bg-blue-300 rounded-xl rounded-bl-[100px]'
          src = {poke.sprite} alt = {poke.nombre}/>
          
        </div>        
        <svg
          className='w-10 cursor-pointer' 
          onClick={ () => setCurrentPoke((currentPk) => {
            setPrevButton(() => {return false})
            return currentPk + 1
          })} 
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
      </div> 
      <div className='flex justify-around '>
        
        {/* <PokeStats
          stats = {poke.stats}
        /> */}
      </div>
      <PokeAbilities
        abilities = {poke.abilities}
      />
      <PokeCharts
        stats = {poke.stats}
      />
    </div>
  );
}
export default Pokedex;