import logo from './logo.svg';
import './App.css';

function App() {
  const a = 5;

  const b = a + 5;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.<br />
          Hello World!<br />
          { b }<br />
          Lee Ji-hoon GAP JIL Go bal hapnida
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
