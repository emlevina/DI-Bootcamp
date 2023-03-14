import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { onAgeDown, onAgeUp } from './actions/counterActions'

function App() {
  const dispatch = useDispatch()
  const age = useSelector(state => state.age)
  return (
    <div className="App">
      <header className="App-header">
        {age}
        <button onClick={() => dispatch(onAgeDown())}>One year less</button>
        <button onClick={() => dispatch(onAgeUp())}>One year more</button>
      </header>
    </div>
  );
}

export default App;
