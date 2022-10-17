import React, { useEffect, useState } from 'react'

const SinglePostDataFetch = () => {
  const [post, updatePost] = useState({})

  const apiURL = "https://jsonplaceholder.typicode.com/posts/2"


  useEffect(() => {
    fetch(apiURL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      updatePost(result)
    })
  }, [])
  return (
    <div>
      {post.title}
    </div>
  )
}

export default SinglePostDataFetch