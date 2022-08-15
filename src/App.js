import logo from './logo.svg';
import './App.css';
import LogoBody from './common/components/Logo/LogoBody';
import LogoHead from './common/components/Logo/LogoHead';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LogoBody
        height='200'
        textColor='blue'
        logoColor='red'
      />
      <LogoHead
        height='200'
        textColor='purple'
        logoColor='red'
      />
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
