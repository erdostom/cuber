import React from 'react';
import './App.css';

function App() {
  let [number, setNumber] = React.useState(0)
  let [guess, setGuess] = React.useState(0)

  function randomizeNumber() {
    setNumber(Math.round(Math.random()*90+10))
    setGuess(0)
  }
  
  function formatOutputNumber(n: number): string {
    let inputAry:String[] = Array.from(String(n))
    let outputAry:String[] = []

    while (inputAry.length >= 3) {
      outputAry = [...(inputAry.splice(inputAry.length - 3, 3)),...outputAry]
      inputAry.length > 0 && outputAry.unshift(',')
    }
     return [...inputAry, ...outputAry].join('')
  }

  React.useEffect(() => randomizeNumber(), [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Guess the cube root</h1>
        <h2>{formatOutputNumber(number ** 3)}</h2>
          <input
            autoFocus={true}
            style={{
              fontSize: 24,
            }}
            value={guess}
            onChange={e => setGuess(Number(e.target.value))}
          />
        <p>
          {guess === number ? "Correct!" : "Incorrect!"}
        </p>
          <button
            style={{
              fontSize: 24,
              padding: 14,
            }}
            onClick={randomizeNumber}
          >
              ANOTHER ONE!
            </button>
              </header>
                </div>
  );
}

export default App;
