import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { ageDownAsync, ageUpAsync, onAgeDown, onAgeUp } from './actions/asyncActions'

function App() {
  const dispatch = useDispatch()
  const age = useSelector(state => state.age)
  const isLoading = useSelector(state => state.isLoading)
  return (
    <div className="App">
      <header className="App-header">
        {age}
        <div className='loader'>
          {isLoading ? 'loading' : ''}
        </div>
        <button onClick={() => dispatch(onAgeDown())}>One year less</button>
        <button onClick={() => dispatch(onAgeUp())}>One year more</button>
        <button onClick={() => dispatch(ageDownAsync())}>One year less Async</button>
        <button onClick={() => dispatch(ageUpAsync())}>One year more Async</button>
      </header>
    </div>
  );
}

export default App;
