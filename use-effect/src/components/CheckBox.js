import {useState, useEffect, useRef} from 'react'


function CheckBox() {

  const [checked, setChecked] = useState(false)

  const nameref = useRef(null)

  useEffect(() => {
    alert(`checkrd: ${checked.toString()}`)
   
  })

  useEffect(() => {
     nameref.current.focus()

  })

  
  return (
    <div className="App">
      <h1>useEffect hook</h1>
<div>
  <input type="checkbox" name="checkbox" id="" value={checked} onClick={() => setChecked(!checked)} />
      {checked ? 'checked' : 'not checked'}

</div>
<div>
  Name:
  <input type="text" ref={nameref} />
</div>
      
    </div>

  );
  
}

export default CheckBox;
