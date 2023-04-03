import React from 'react'

export default function PokeTypes({ type }) {
  // key: t.type.name  value:css color
  const color = {
    grass: "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 border-green-300 border font-semibold",
    poison: "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 border-purple-300 border font-bold",
    fire: "bg-orange-100 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300 border-orange-300 border font-semibold",
    water: "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 border-blue-300 border font-semibold",
    default: "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 border-blue-300 border font-semibold"
  }
  
  return(
    <div className='flex flex-row space-x absolute top-3 left-2'>
      {type.map(t => (
        <div 
          // Esto es una forma de switch empleando un objeto. Empleando un switch convencional 
          // tendría opción aun estado por defecto (por ejemplo la badge en blanco) sin usar un or statemetn.
          className = {color[t.type.name] || color.default}
          key = {t.type.name}>
            {t.type.name} 
        </div>
      ))}
    </div>
  )
}