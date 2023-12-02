import React from 'react'

function InputBox({setInputVal}) {
  
  return (
    <div className='input-box'>
      <i class="fa-solid fa-magnifying-glass" />
      <input 
        className='input-box-search'
        onChange={(e)=>setInputVal(e.target.value)} 
        placeholder='Search...'
      />
    </div>
  )
}

export default InputBox
