import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const OnePiece = ({lang, clickHandler}) => {
  return (
    <div>
      <p>{lang.name}</p>
      <p>{lang.votes}</p>
      <button onClick={clickHandler}>Click me!</button></div>
    
  )
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 }
      ]
    }
  }
  // ["votes"]: prevState.languages[index]["votes"]++

  clickHandler(index){
    let langs = [...this.state.languages];
    let langToUpdate = {...langs[index]};
    langToUpdate.votes = this.state.languages[index].votes+1;
    langs[index] = langToUpdate;
    this.setState({languages: langs});
  }

  render() {
    return (
      <div>
        {this.state.languages.map((lang, index) => <OnePiece lang={lang} key={index} clickHandler={()=>{this.clickHandler(index)}}/>)}
      </div>
    );
  }
}

export default App;