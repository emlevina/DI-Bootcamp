import './App.css';
import Input from './components/Input';
import ListOfTodos from './components/ListOfTodos';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Input />
      <ListOfTodos />
      <Filter />
    </div>
  );
}

export default App;
