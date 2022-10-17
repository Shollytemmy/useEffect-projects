import React, { useEffect, useReducer } from 'react'


const initialState = {
    id: 9,
    post: {},
    loading: true,
    hasError: ''
}
const reducerFunc = (state, {type, payload}) => {
    console.log(payload)

    switch(type){
        case "FETCH_SUCCEEDED":{
            return{ 
                ...state, loading: false,
                post: payload,
                hasError: ''
            }

        }

        case "ONCHANGE":{
            console.log(payload)
            return{...state, loading: false,
                id: payload,
                hasError: ''
              
             }
        }

        case "ERROR_OCCUR":{
            console.log(payload)
            return{
                ...state, loading: false,
                post: {},
                hasError: payload
            }
        }

        default:
            return state
    }

}



const DataFetchingWithReducer = () => {
    const [state, dispatch] = useReducer(reducerFunc, initialState)

const apiURL = `https://jsonplaceholder.typicode.com/posts/${state.id}`

    useEffect(() => {
        fetch(apiURL)
        .then((response) => response.json())
        .then((result) => {
            dispatch({type: "FETCH_SUCCEEDED", payload: result})
        })
        .catch((error) => {
            console.log("error", error);
            dispatch({type: "ERROR_OCCUR", payload: error.message})
        })
    }, [state.id])

  return (
    <div>
        <input type="text" value={state.id} onChange={(e) => dispatch({type: "ONCHANGE", payload: e.target.value})} /><br />
        {state.loading ? "Loading ...": state.post.title}
        {state.hasError ? state.hasError: null}
    </div>
  )
}

export default DataFetchingWithReducer