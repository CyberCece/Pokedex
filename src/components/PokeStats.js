import React from 'react'

export default function PokeStats({ stats }) {
  console.log(stats)
  return(
    <div>
      {stats.map(s => (
        <div key = {s.stat.name} > {s.stat.name}: {s.base_stat}</div>
      ))}
    </div>
  )
}