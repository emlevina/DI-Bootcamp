import './App.css';
import { connect } from 'react-redux';
import Child from './components/Child';
import { changePropOne } from './redux/actions'


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux app</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          props.changePropOne(e.target.input.value)
          e.target.reset()
        }}>
          <input type="text" name='input'/>
          <button>Change</button>
        </form>

        {props.a}
        <Child />
      </header>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    a: state.prop_one
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePropOne: (value) => dispatch(changePropOne(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
