
export default function ACounter({count, setCounter}) {
  const counterText = `clicked ${count} times`
    return (
      <div>
        <div>{counterText}</div>
        <button
          onClick={ (e) => setCounter((x) => x + 1)}
        >Count up!</button>
      </div>
    )
}