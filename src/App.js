import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid';
import Modal from './components/Modal'

// Key to assign to the todos before saving in local storage  
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [todos, setTodos] = useState([])
  // useRef to refference elements inside of our HTML
  const todoNameRef = useRef()
  // useEffect to save the Todos in the list even after refreshing
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedTodos) setTodos(storedTodos)
}, [])
/* useEffect takes 2 parameters: a funtion and an array of properties
 that determine when to call that function --> In this case: run the function 
 that saves the todos everytime the todo list changes (by adding or removing a todo)  */
  useEffect(() => {
    /* Save todos in local storage (para como argumentos la key (esto no lo entiendo) 
    y convierte en string los todos para almacenarlos)*/
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    /* IMPORTANTE: en react nunca se debe modificar directamente una variable de estado
    En su lugar se crea una nueva que establece el estado nuevo */
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleClearTodos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    // Access the content written in the input
    const name = todoNameRef.current.value
    // Avoid saving empty strings
    if (name === '') return
    // Append the content to the list
    setTodos(prevTodos => {
      // uuid library assings a rando id to each todo --> must be imported
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    // Empty the input after clicking Add Todo
    todoNameRef.current.value = null
  }
  return(
    <div>
    <TodoList todos = {todos} toggleTodo = {toggleTodo} />
    <input ref={todoNameRef} type = "text" />
    <button onClick = {handleAddTodo} >Add Todo</button>
    <button onClick = {handleClearTodos} >Clear complete</button>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal open = {isOpen} onClose = {() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
    </div>
    </div>)
}
export default App;