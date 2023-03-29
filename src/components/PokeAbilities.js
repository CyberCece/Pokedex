import React from 'react'

export default function PokeAbilities({ abilities }) {
  console.log(abilities)
  return(
    <div>
      {abilities.map(a => (
        <div key = {a.ability.name} > {a.ability.name}</div>
      ))}
    </div>
  )
}