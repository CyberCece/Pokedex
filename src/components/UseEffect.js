import React, { useState, useEffect } from 'react'

export default function Effect() {
  const [resourceType, setResourceType] = useState('posts')

  // useEffect se emplea para comunicarse con elementos/recursos exteriores 
  useEffect(() => {
    console.log('resource changed')
    return () => {
      console.log('return from resource change')
    }
  }, [resourceType])

  return (
    <>
      {/* En este div se definen 3 botones que modifican el estado 
      por medio de setResourceType */}
      <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      {/* El ResourceType al que se ha cambiado por medio de los 3 botones
      se imprime en formato header para saber en todo momento cuál es */}
      <h1>{resourceType}</h1>
    </>
  )
}