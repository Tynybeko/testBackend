import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'


function App() {
  const [test, setTest] = useState('')
  useEffect(() => {
    fetch('http://localhost:5555/post')
      .then(res => res.json())
      .then(res => setTest(res))
      .catch(err => console.log(err))
  }, [])
  console.log(test);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {test?.id}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
