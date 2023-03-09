import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = ({ todo, fetchTasks }) => {
  const clickHandler = async (e) => {
    const data = await axios.delete(`/api/tasks/${todo._id}`)
    console.log(data)
    fetchTasks()
  }

  const toggleIsDone = () => {
    axios.put(`/api/tasks/${todo._id}`, { isDone: !todo.isDone })
      .then(data => {
        fetchTasks()
        console.log(data.data)
      })
  }

  return (
    <li>
      <input type="checkBox" checked={todo.isDone} onChange={toggleIsDone} />
      <span style={todo.isDone ? { color: 'gray', textDecoration: "line-through" } : {}}>{todo.body}</span>
      <button onClick={clickHandler}>delete</button>
    </li>
  )
}

function App() {
  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = () => {
    axios.get('/api/tasks')
      .then(data => setToDos(data.data))
      .catch(err => console.log(err))
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const data = await axios.post('/api/tasks', { body: input })
    console.log(data.data)
    setInput('')
    fetchTasks()
  }

  const changeHandler = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="app">
      <h1>To-Do</h1>
      <ul>{toDos.map(todo => <Todo key={todo._id} todo={todo} fetchTasks={fetchTasks} />)}</ul>
      <form onSubmit={submitHandler}>
        <input type="text" name="newTodo" id="newTodo" value={input} onChange={changeHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
