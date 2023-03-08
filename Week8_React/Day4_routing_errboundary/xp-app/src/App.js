import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Shop from './components/Shop';
import Profile from './components/Profile';
import ErrorBoundary from './components/ErrorBoundary';
import PostsList from './components/PostsList';
import data from './data.json';
import moreData from './moreData.json';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

function App() {
  const fetchData = async () => {
    let res = await fetch('https://webhook.site/124bc5ec-402a-4e3e-bc9b-05d5056c47e6', {
      method: "POST",
      headers: {
        "Content-type": "Application/json"
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    })
    console.log(res)
  }
  return (
    <div className="App">
      <h2>Ex1</h2>
      <BrowserRouter>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={(
            <ErrorBoundary><Home /></ErrorBoundary>)} />
          <Route path='/shop' element={<ErrorBoundary><Shop /></ErrorBoundary>} />
          <Route path='/profile' element={<ErrorBoundary><Profile /></ErrorBoundary>} />
        </Routes>

      </BrowserRouter>

      <h2>Ex2</h2>
      <PostsList posts={data} />

      <h2>Ex3</h2>
      <Example1 socialMedias={moreData.SocialMedias} />
      <Example2 skills={moreData.Skills} />
      <Example3 experiences={moreData.Experiences} />

      <h2>Ex4</h2>
      <button onClick={fetchData}>Click me</button>
    </div>
  );
}

export default App;
