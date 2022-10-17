import React from 'react'
import './App.css';
import CheckBox from './components/CheckBox';
import DataFetching from './components/DataFetching';
import FetchingWithButtonClick from './components/FetchingWithButtonClick';
import SinglePostDataFetch from './components/SinglePostDataFetch';

function App() {

 

 

  
  return (
    <div className="App">
      <h1>useEffect hook</h1>
      {/* <DataFetching /> */}
      {/* <CheckBox /> */}
      {/* <SinglePostDataFetch /> */}
      <FetchingWithButtonClick />

      
    </div>

  );
  
}

export default App;
