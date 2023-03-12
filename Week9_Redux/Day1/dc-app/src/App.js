import './App.css';
import MovieDetails from './components/MovieDetails';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MoviesList />
        <MovieDetails />
      </header>
    </div>
  );
}

export default App;
