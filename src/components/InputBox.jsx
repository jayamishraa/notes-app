import React, { useState } from 'react'

function InputBox() {
    const [inputVal, setInputVal] = useState()
    const handleInput = (e) => {
        setInputVal(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div className='input-box'>
      <input 
        className='input-box-search'
        onChange={handleInput} 
        value={inputVal} 
        placeholder='Search...'
      />
      <i class="fa-solid fa-magnifying-glass" />
    </div>
  )
}

export default InputBox
