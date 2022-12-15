import React from 'react'
import Button from './Button';

function TotoItem({todo, deleteTodo, toggleTodo, toggleTodoEdit, selectTodo}) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-10 d-flex flex-row justify-content-center align-items-center p-10 ${todo.selected ? "selected" : " "}`}>
      <span 
        className='flex-fill mr-15'>{todo.content} {todo.done && "✅" }{" "}</span>

      <Button
      className='btn btn-primary mr-15'
      onClick={(e)=> {
        e.stopPropagation() ;
        toggleTodo()} 
      }
      text = "Valider"
      />

      <Button
        className='btn btn-primary mr-15'
        onClick={(e)=> {
          e.stopPropagation() ;
          toggleTodoEdit()}}
        text ="Modifier"
      />

      <Button
        onClick={(e)=> {
          e.stopPropagation() ;
          deleteTodo()}} 
        className='btn btn-reverse-primary mr-15'
        text= "supprimer"
        />

    </li>
  )
}

export default TotoItem