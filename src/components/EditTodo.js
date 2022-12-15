import {useState} from 'react'
import Button from './Button';

function EditTodo({todo, cancelEditTodo,editTodo}) {
  const [value,setValue] = useState(todo.content)

  function handleValue(e){
    const inputValue = e.target.value;
    setValue(inputValue)
  }
  function handleKeyDown(e){
    if(e.code === "Enter" && value.length ){
      editTodo(value)
      setValue("")
    }
  }
  function handleClick(){
    if(value.length){
      editTodo(value);
      setValue("")
    }
  }

  return (
    <div className='d-flex flex-row justify-content-center align-items-center'>
      <input type="text" onChange={handleValue} onKeyDown={handleKeyDown} value={value} placeholder='Ajouter une Todo' className='mr-15 flex-fill'/>
      <Button onClick={handleClick} className="mr-15" text="Valider"/>
      <Button onClick={cancelEditTodo} className='btn btn-reverse-primary' text ="Annuler"/>
    </div>
  )
}

export default EditTodo