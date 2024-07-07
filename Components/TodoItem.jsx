import React from 'react'

export  function TodoItem({todo,doneTodo,deleteTodo}) {
  return (
    <div className={todo.done? 'TodoItem active' : 'TodoItem'}>
        <p>{todo.text}</p>

        <div className='icons'>
            <i className="fa-solid fa-check" onClick={()=>doneTodo(todo.id)}></i>
            <i className="fa-solid fa-xmark" onClick={()=>deleteTodo(todo.id)}></i>
        </div>
    </div>
  )
}
