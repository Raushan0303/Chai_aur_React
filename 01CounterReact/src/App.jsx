
import { useState } from 'react';
import './App.css'

function App() {

    let [counter, setCounter] = useState(15);
    const addValue=()=>{
      console.log('clicked',counter);
      counter=counter+1;
      setCounter(counter)
    }

    const removeValue=()=>{
      counter= counter-1;
      setCounter(counter);
    }
    
  return ( 
    
    <>  
      <h1>Chai aur react</h1>
      <h2>counter Value:{counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
