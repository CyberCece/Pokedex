import React from 'react'

export default function PokeAbilities({ abilities }) {
  return(
    <div className = 'flex py-4'>
      <div className='flex w-full text-lime-700 justify-around items-center px-6 flex-col border-4 rounded-2xl border-lime-900 bg-lime-300'>
        <div className='flex pr-2 border-b-2 border-lime-900 justify-center w-full'>ABILITIES</div>
        <div className='flex flex-row'>
          {abilities.map(a => (
            <div className ='flex capitalize px-3' key = {a.ability.name} > {a.ability.name}</div>
          ))}
        </div>

      </div>
    </div>
  )
}