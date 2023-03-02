import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState('');
  const [chances,setChances] = useState(3);
  const [result,setResult] = useState('');
  const [gameOver,setGameOver] = useState(false);
  const [correctScore,setCorrectScore] = useState(0);
  const [wrongScore,setWrongScore] = useState(0);

  const handleSubmit = (event) =>{
    event.preventDefault();
    // console.log('Number submitted : '+number);
    const randomNumber = Math.floor(Math.random() * 10)+1;
    // console.log(randomNumber);
    if(chances > 0){
      setChances(prevChances=>prevChances-1);
      if(parseInt(number) === randomNumber){
        // setChances(oldChances=>oldChances-1);
        // console.log(chances);
        setResult(`Congratulations! You guessed the number! you have ${chances} more chance left`)
        setNumber('')        
        setCorrectScore(oldScore=>oldScore + 1)

      } else {     
        // console.log('before'+chances);   
          // setChances(oldChances=>oldChances-1);
          // console.log('after'+chances);
          setResult(`Sorry,the number was ${randomNumber}. you have ${chances} more chance left.`)          
          setNumber('')
          setWrongScore(oldScore=>oldScore+1)        
      }  
    } else {
      console.log(chances);
      setResult(`Sorry,you have no more chances,the correct number was ${randomNumber}`)
      setChances(3);
      setGameOver(true);
      setWrongScore(oldScore=>oldScore+1)

    }
  }
  const handleChange = (event)=>{
    setNumber(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a number:
        <input type="number"
               value={number}
               onChange={handleChange}
               min="1"
               max="10"
               required 
               disabled={gameOver} />
        </label>
        <button type='submit'disabled={gameOver}>Check Number</button>
      </form>
      <h4>{result}</h4>
      <h1>Score</h1>
      <h2>No. of Correct Digit:{correctScore} </h2>
      <h2>No. of Wrong Digit: {wrongScore}</h2>
      <p>{Math.floor(correctScore/4 * 100)}% Correct</p>
      <p>{Math.floor(wrongScore/4 * 100)}% Wrong</p>

    </div>
  )
}

export default App
