import React, { Component } from 'react';
import axios from 'axios';

class PostDataAxios extends Component {

    constructor(){
        super()
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    postDataWithAxios = async (formData) => {
        const url = 'https://jsonplaceholder.typicode.com/users/'
        const data = await axios.post(url, formData)
        console.log(data.data)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.postDataWithAxios(this.state)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="userId" id="userId" placeholder='user Id' value={this.state.userId} onChange={this.handleChange}/>
                    <input type="text" name="title" id="title" placeholder='title' value={this.state.title} onChange={this.handleChange}/>
                    <input type="text" name="body" id="body" placeholder='text' value={this.state.body} onChange={this.handleChange}/>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}

export default PostDataAxios;