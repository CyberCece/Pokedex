import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)
    const counterText = `clicked ${counter} times`
      return (
        <div>
          <div>{counterText}</div>
          <button
            onClick={ (e) => setCounter((x) => x + 1)}
          >Count up!</button>
        </div>
      )
  }