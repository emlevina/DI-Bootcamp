import { useState } from 'react';

const PostData = () => {
    const [input, setInput] = useState({})

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const postData = async (input) => {
        const url = 'https://jsonplaceholder.typicode.com/users/'
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify(input)
        })
        const data = await res.json()
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData(input)
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" id="user" onChange={handleChange} placeholder='user'/>
                <input type="text" name="email" id="email" onChange={handleChange} placeholder='email' />
                <button>Send</button>
            </form>
        </div>
    );
};

export default PostData;