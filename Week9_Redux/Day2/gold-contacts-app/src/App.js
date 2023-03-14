import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createContact, deleteContact } from './actions/contactAction';


const Contact = ({ contact, index, dispatch }) => {
  return (
    <tr className='card_'>
      <td>{contact}</td>
      <td><button onClick={() => dispatch(deleteContact(index))} className='btn btn-secondary'>Delete</button></td>
    </tr>
  )
}

function App() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts)

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createContact(name))
    setName('')
  }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit} className="form-inline">
        <div>
          <input type="text" name='name' onChange={handleChange} value={name} />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
      <table>
        <tbody>
          {contacts.map((contact, i) => <Contact contact={contact} index={i} key={i} dispatch={dispatch} />)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
