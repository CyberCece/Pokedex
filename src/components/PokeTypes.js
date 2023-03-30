import React from 'react'

export default function PokeTypes({ type }) {
  console.log(type)
  return(
    <div className='flex flex-row space-x-3 > *'>
      {type.map(t => (
        <div key = {t.type.name} > {t.type.name} </div>
      ))}
    </div>
  )
}