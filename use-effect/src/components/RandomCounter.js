import React from 'react'
import { useState } from 'react'

const RandomCounter = () => {
    const [items, setItems] = useState([])
    console.log(items)

    const addItem = () => {
        setItems(
            [...items, Math.floor((Math.random()*40) + 1) 
                // {
                //     id: items.length,
                //     value: Math.floor((Math.random()*40) + 1) 
                // }
            ]
        )
    }
  return (
    <div>
        <button onClick={addItem}>Click to Generate</button>
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </div>
  )
}

export default RandomCounter