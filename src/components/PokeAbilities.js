import React from 'react'

export default function PokeAbilities({ abilities }) {
  console.log(abilities)
  return(
    <div className = 'py-6'>
      <div className='border-4 rounded-2xl border-lime-900 bg-lime-400'>
        <div className='border-b-4 px-4 border-lime-800'>ABILITIES</div>
        {abilities.map(a => (
          <div className ='capitalize px-4' key = {a.ability.name} > {a.ability.name}</div>
        ))}
      </div>
    </div>
  )
}