import React from 'react'

export default function PokeAbilities({ abilities }) {
  return(
    <div className = 'flex py-4'>
      <div className='flex w-full justify-around max-h-8 px-6 flex-row border-4 rounded-2xl border-lime-900 bg-lime-400'>
        <div className='flex'>ABILITIES >></div>
        {abilities.map(a => (
          <div className ='capitalize px-3' key = {a.ability.name} > {a.ability.name}</div>
        ))}
      </div>
    </div>
  )
}