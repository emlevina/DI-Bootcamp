import './App.css';
import BuggyCounter from './components/BuggyCounter';
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <h1>Ex1</h1>
      <h2>Two in one</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Each in Boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>One without Boundary</h2>
      <BuggyCounter />
      <hr />
      <h1>Ex2</h1>
      <Color />
    </div>
  );
}

export default App;
