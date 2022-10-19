import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UpdateTitle = () => {
    const [count, setCount] = useState(0)

    
    useEffect(() => {
        document.title = `you click ${count} times`

    })
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default UpdateTitle