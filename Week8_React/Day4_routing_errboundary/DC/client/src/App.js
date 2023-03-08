import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [response, setResponse] = useState()
  const [response2, setResponse2] = useState()
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setResponse(data))
  }, [])

  const postData = async (post) => {
    const res = await fetch('/api/world', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({post})
    })
    //console.log(res)
    const data = await res.json()
    // console.log(data)
    setResponse2(data)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    postData(input)
    setInput('')
  }

  return (
    <div className="App">
      {response && response.msg}
      <form onSubmit={submitHandler}>
        <input type="text" name="" id="" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button>Send</button>
        <p>{response2 && response2.msg}</p>
        
      </form>
    </div>
  );
}

export default App;
