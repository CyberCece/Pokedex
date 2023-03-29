import React from 'react'

export default function PokeTypes({ type }) {
  console.log(type)
  return(
    <div>
      {type.map(t => (
        <div key = {t.type.name} > {t.type.name} </div>
      ))}
    </div>
  )
}