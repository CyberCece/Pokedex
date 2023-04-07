import React from 'react'

export default function NameFinder({ currentName, setCurrentName }) {
  return(
    <div>
      <input
      className='flex pt-4 capitalize w-60 placeholder-white text-4xl bg-red-500'
      type ="text"
      placeholder={currentName}
      onKeyDown={ (event) => {
        if (event.key === 'Enter') {
          setCurrentName(() => {
            return event.target.value.toLowerCase()
          })
        } 
      }}
      />
    </div>
  )
}