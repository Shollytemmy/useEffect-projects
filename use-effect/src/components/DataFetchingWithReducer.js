import React, { useEffect, useReducer } from 'react'


const initialState = {
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

const apiURL = "https://jsonplaceholder.typicode.com/posts/1"

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
    }, [])

  return (
    <div>
        {state.loading ? "Loading ...": state.post.title}
        {state.hasError ? state.hasError: null}
    </div>
  )
}

export default DataFetchingWithReducer