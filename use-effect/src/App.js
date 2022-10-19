import React from 'react'
import './App.css';
import CheckBox from './components/CheckBox';
import DataFetching from './components/DataFetching';
import DataFetchingWithReducer from './components/DataFetchingWithReducer';
import FetchingWithButtonClick from './components/FetchingWithButtonClick';
import RandomCounter from './components/RandomCounter';
import SinglePostDataFetch from './components/SinglePostDataFetch';
import UpdateTitle from './components/UpdateTitle';

export const buttonContext = React.createContext()

function App() {


 
 let value = "FetchData"
 

  
  return (
    <div className="App">
      <h1>useEffect hook</h1>
      {/* <DataFetching /> */}
      {/* <CheckBox /> */}
      {/* <SinglePostDataFetch /> */}
      {/* <buttonContext.Provider value={value}>
      <FetchingWithButtonClick />

      </buttonContext.Provider> */}

      {/* <DataFetchingWithReducer /> */}
      {/* <RandomCounter /> */}
      <UpdateTitle />

      
    </div>

  );
  
}

export default App;
