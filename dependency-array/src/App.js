
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [val, set] = useState("")
  const [phrase, setPhrase] = useState('Something is here...')
  const [save, setSave] = useState([])

  const handleChange = (e) => {
    set(e.target.value)
  }

  const createPhrase = () => {

    setPhrase(val)
    set('')
    
  }

  useEffect(() => {
    console.log(`typing ${val}`)
  }, [val])


  useEffect(() => {
    console.log(`save ${phrase}`)
  }, [phrase])


  useEffect(() => {
    console.log(`Either the val or phrase state changes`)
  }, [val, phrase])


  
  return (
    <div className="App">
      <h1>useEffect Dependency</h1>

      <div>
        <label htmlFor="">Favourie Phrase: </label>
        <input type="text" placeholder={phrase}
        name='' value={val} onChange={handleChange}/>
        <button type="submit" onClick={createPhrase}>add</button>
       <p>{val}</p> 
       
      </div>
      
    </div>
  );
}

export default App;
