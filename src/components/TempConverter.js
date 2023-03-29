import { useState } from "react"

function cToF(c){
  let x = ((parseFloat(c) - 32) * 5) / 9;
  return parseFloat(x.toFixed(2));
}

function fToC(f){
  let x = (parseFloat(f) * 9) / 5 + 32;
  return parseFloat(x.toFixed(2));
}

export default function TempConv() {
    const [celsius, setCelsius] = useState(0)
    const [farenheit, setFarenheit] = useState(0)

      return (
        <div>          
          <input
            type="number"
            placeholder="Fahrenheit"
            onInput={(e) => {
              setCelsius((x) => fToC(e.target.value))
              setFarenheit((x) => e.target.value)
            }}
            value={farenheit}
          ></input>
          <input
            type="number"
            placeholder="Celsius"
            onInput={ (e) => {
              setFarenheit((x) => cToF(e.target.value))
              setCelsius((x) => e.target.value)
            }}
            value={celsius}
          ></input>
          
        </div>
      )
  }