import React, { useState } from 'react'
import { TodoItem } from './TodoItem';
import { AddTodo } from './AddTodo';

export  function TodoList() {

    const[todos,setTodos]=useState([
        {id:1, text:'React', done:false},
        {id:2, text:'Vue', done:false},
        {id:3, text:'Java', done:true},
    ]);

    const addTodo =(text)=>{
        const newTodo ={
            id:Date.now(), text, done:false};
            setTodos([newTodo,...todos]);
    }

    const doneTodo = (id)=>{
        const newTodos = todos.map(todo=>{
            if(todo.id === id){
                todo.done = !todo.done;
            }
            return todo;
        })
        setTodos(newTodos)
    }

    const deleteTodo = (id) =>{
        const question = window.confirm('Delete toDo???')

        if(question){
            const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        }
        
    }

      return (
    <div className='TodoList'>
        <AddTodo addTodo={addTodo}/>
        {
            todos.map((todo,index) =><TodoItem
            key={index}
            todo={todo}
            doneTodo={doneTodo}
            deleteTodo={deleteTodo}
            />)
        }
    </div>
  )
}
