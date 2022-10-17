import React, { useEffect, useState } from 'react'

const FetchingWithButtonClick = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const apiURL = `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`


    const handleClick = () => {

        setIdFromButtonClick(id)

    }

    useEffect(() => {
        fetch(apiURL)
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setPost(result)
        })

    }, [idFromButtonClick])
  return (
    <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>FetchData</button>
        <p>{post.title}</p>
    </div>
  )
}

export default FetchingWithButtonClick