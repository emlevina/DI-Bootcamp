import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Form from './components/Form';
import FormData from './components/FormData';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  handleChange = (data) => {
    this.setState((prevState) => ({
      ...data,
      lactoseFree: data.lactoseFree,
      nutsFree: data.nutsFree,
      vegan: data.vegan,
    }))
  }

  render() {
    return (
      <div>
        <Form handleChange={(data) => this.handleChange(data)} />
        <FormData formData={this.state} />
      </div>
    );
  }
}

export default App;
