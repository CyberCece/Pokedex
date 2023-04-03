import React from 'react'

export default function PokeTypes({ type }) {
  // key: t.type.name  value:css color
  const color = {
    normal: "bg-[#a9a880] text-[#e4e5b8] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#949589] border-2 font-semibold",
    fighting: "bg-[#ac3d31] text-[#ffb299] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#76322c] border-2 font-semibold",
    flying: "bg-[#B8A9EE] text-[#E9E1FD] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#816AB6] border-2 font-semibold",
    poison: "bg-[#B037CB] text-[#F6D0FF] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-purple-300 border-2 font-bold",
    ground: "bg-[#dbc176] text-[#fff3b2] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#91783c] border-2 font-semibold",
    rock: "bg-[#b39e4c] text-[#fbefaa] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#927d34] border-2 font-semibold",
    bug: "bg-[#a9b940] text-[#fbffaf] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#919f34] border-2 font-semibold",
    ghost: "bg-[#8570BB] text-[#DBD3F0] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#594980] border-2 font-bold",
    steel: "bg-[#b8b9cd] text-[#ecebf2] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#97929b] border-2 font-bold",
    fire: "bg-[#FF8800] text-orange-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#E65B08] border-2 font-semibold",
    water: "bg-[#6f91ef] text-[#bfdcff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#4b5892] border-2 font-semibold",
    grass: "bg-[#78C53A] text-[#EAFFD9] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-green-300 border-2 font-semibold",
    electric: "bg-[#eed250] text-[#fff6b1] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#ddc048] border-2 font-semibold",
    psychic: "bg-[#e15779] text-[#FFabbf] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#bf546c] border-2 font-bold",
    ice: "bg-[#99e1df] text-[#e3fffa] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#c8ede7] border-2 font-bold",
    dragon: "bg-[#693ced] text-[#ceb9ff] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#3218c3] border-2 font-bold",
    dark: "bg-[#6a594b] text-[#d5c5b0] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-[#574b40] border-2 font-bold",    
    fairy: "bg-[#FF8DD9] text-[#FFE1F5] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-purple-300 border-2 font-bold",
    default: "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full border-blue-300 border-2 font-semibold"
  }
  
  return(
    <div className='flex uppercase flex-row space-x absolute top-3 left-2'>
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