import React from 'react'

function paddedNumber(currentNum) {
  const currentString = currentNum.toString()
  let stLength = 4 - currentString.length
  let padding =""
  for (let i=0; i < stLength; i++){
    padding += "0"
  } 
  return padding
}


export default function PokeFinder({ currentPoke, setCurrentPoke }) {
    const pokeNumber = "#" + paddedNumber(currentPoke) + currentPoke
  return(
    <div>
      <input
      className='flex p-2 w-36 text-center place-items-center placeholder-white text-4xl border-8 rounded-full border-slate-50 bg-cyan-500'
      size="4"
      min="1"
      type ="number"
      placeholder={pokeNumber}
      onKeyDown={ (event) => {
        if (event.key === 'Enter') {
          setCurrentPoke(() => {
            return Number(event.target.value) 
          })
        } 
      }}
      />
    </div>
  )
}
// gif unown? https://forums.pokemmo.com/uploads/monthly_2020_10/1392966187789.gif.8f8685345a400e0e5d6ca3c2a1aba734.gif