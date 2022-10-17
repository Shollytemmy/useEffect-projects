import React, { useEffect, useState } from 'react'

const SinglePostDataFetch = () => {
  const [post, updatePost] = useState({})
  const [getId, updateId] = useState(1)

  const apiURL = `https://jsonplaceholder.typicode.com/posts/${getId}`


  useEffect(() => {
    fetch(apiURL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      updatePost(result)
    })
  }, [getId])
  return (
    <div>
      <input type="text" name="" value={getId} id="" onChange={(e) => updateId(e.target.value)} />

      <p>{post.title}</p>
    </div>
  )
}

export default SinglePostDataFetch