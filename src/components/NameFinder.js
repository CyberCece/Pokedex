import React from 'react'

export default function NameFinder({ currentName, setCurrentName }) {
  return(
    <div>
      <input
      className='flex pt-4 text-center capitalize w-52 placeholder-white text-4xl bg-red-500'
      type ="text"
      placeholder={currentName}
      onKeyDown={ (event) => {
        if (event.key === 'Enter') {
          setCurrentName(() => {
            const value = event.target.value || "default"
            return value.toLowerCase()
          })
        } 
      }}
      />
    </div>
  )
}