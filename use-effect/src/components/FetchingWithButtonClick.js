import React, { useEffect, useState } from 'react'

const FetchingWithButtonClick = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    const apiURL = `https://jsonplaceholder.typicode.com/posts/${id}`


    useEffect(() => {
        fetch(apiURL)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setPost(result)
        })

    }, [id])
  return (
    <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button>FetchData</button>
        <p>{post.title}</p>
    </div>
  )
}

export default FetchingWithButtonClick