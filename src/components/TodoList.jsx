import React from 'react'

const TodoList = ({addList}) => {
    console.log(addList)
  return (
    <div>
      <p>{addList}</p>
    </div>
  )
}

export default TodoList
