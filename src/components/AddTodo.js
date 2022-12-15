import React, { useState } from 'react';
import Button from './Button';

function AddTodo({addTodo}) {

  const [value,setValue] = useState('')

  function handleValue(e){
    const inputValue = e.target.value;
    setValue(inputValue)
  }
  function handleKeyDown(e){
    if(e.code === "Enter" && value.length ){
      addTodo(value);
      setValue("")
    }
  }
  function handleClick(){
    if(value.length){
      addTodo(value);
      setValue("")
    }
  }

  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <input 
        type="text" 
        onChange={handleValue} 
        onKeyDown={handleKeyDown} 
        value={value} 
        placeholder='Ajouter une Todo' 
        className='mr-15 flex-fill'
        />
      <Button onClick={handleClick}  text="Ajouter"/>
  
    </div>
  )
}

export default AddTodo