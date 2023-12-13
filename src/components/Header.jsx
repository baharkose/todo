import React, { useState } from 'react'

const Header = ({setAddList, addList}) => {
    const [input, setInput] = useState("")
    const handleForm = (e) =>{
        e.preventDefault()
        setAddList([...addList, input])
    }
  return (
    <div>
      <form action="">
        <input type="text"  onChange={(e) => setInput(e.target.value)}/>
        <button type='submit' onClick={handleForm}>+</button>
      </form>
    </div>
  )
}

export default Header
