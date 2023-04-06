import { BarChart, Bar,  XAxis, YAxis, Tooltip,  ResponsiveContainer } from 'recharts';

export default function PokeCharts({stats}) {
  
  const labels = {
    hp:"HP",
    attack:"Atk",
    defense:"Def",
    'special-attack':"SpA",
    'special-defense':"SpD",
    speed:"Spe",
  }
  
  const statList = stats.map((e) => (
      {
       name: labels[e.stat.name], 
       base: e.base_stat
      }))
    return (
      <ResponsiveContainer className = 'flex pt-4 bg-yellow-100 border-4 border-amber-400 rounded-2xl' width="99%" aspect={3.5}>
        <BarChart
          width={100}
          height={100}
          data={statList}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" stroke="#d97706" strokeWidth={2}/>
          <YAxis type="number" domain={[0, 120]} hide axis/>
          <Tooltip />
          <Bar dataKey="base" fill="#fbbf24" stroke="#d97706" strokeWidth={2}/>
        </BarChart>
      </ResponsiveContainer>
    );
}