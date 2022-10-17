import React from 'react'
import './App.css';
import CheckBox from './components/CheckBox';
import DataFetching from './components/DataFetching';
import FetchingWithButtonClick from './components/FetchingWithButtonClick';
import SinglePostDataFetch from './components/SinglePostDataFetch';

export const buttonContext = React.createContext()

function App() {


 
 let value = "FetchData"
 

  
  return (
    <div className="App">
      <h1>useEffect hook</h1>
      {/* <DataFetching /> */}
      {/* <CheckBox /> */}
      {/* <SinglePostDataFetch /> */}
      <buttonContext.Provider value={value}>
      <FetchingWithButtonClick />

      </buttonContext.Provider>

      
    </div>

  );
  
}

export default App;
