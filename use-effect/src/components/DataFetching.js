import React, { useEffect, useState } from 'react'

const DataFetching = () => {
  const [posts, setPosts] = useState([])

  const apiURL = "https://jsonplaceholder.typicode.com/posts"


  useEffect(() => { 
    fetch(apiURL)
    .then((response) => response.json())
    .then((result) =>{
      setPosts(result)
      console.log(result)
    })
  }, [])

  return (
    <div>
      <ul>
        {
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching