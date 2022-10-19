import React, { useEffect } from 'react'
import { useState } from 'react'

const UpdateTitle = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    

   
    useEffect(() => {
        console.log("UseEffect is updating")
         document.title = `you click ${count} times`

    }, [count])
  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  )
}

export default UpdateTitle