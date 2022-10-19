import React from 'react'
import { useState } from 'react'

const RandomCounter = () => {
    const [items, setItems] = useState([])
    console.log(items)

    const addItem = () => {
        setItems(
            [...items,{
                    id: items.length,
                    value: Math.floor((Math.random()*40) + 1) 
                }
            ]
        )
    }
  return ( 
    <div>
        <button onClick={addItem}>Click to Generate</button>
        {items.map((item) => <li key={item.id}>{item.value}</li>)}
    </div>
  )
}

export default RandomCounter