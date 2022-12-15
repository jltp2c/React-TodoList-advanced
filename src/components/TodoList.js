import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo"

function TodoList({todoList, deleteTodo, toggleTodo, toggleTodoEdit, editTodo,selectTodo}){
  return todoList.length ? (
    <ul>
      {todoList.map(todo=> todo.edit?  
      (<EditTodo 
        key={todo.id} 
        todo={todo}
        editTodo = {(content)=>editTodo(todo.id, content)}
        cancelEditTodo = {()=>toggleTodoEdit(todo.id)}
      />
      ):(
      <TodoItem 
        key={todo.id} 
        todo={todo}
        deleteTodo={()=>deleteTodo(todo.id)} 
        toggleTodo={()=>toggleTodo(todo.id)}
        toggleTodoEdit = {() => toggleTodoEdit(todo.id)}
        selectTodo = {()=> selectTodo(todo.id)}
        />))}
    </ul>
  ) : <p>Pas de tâche pour le moment</p>
}

export default TodoList