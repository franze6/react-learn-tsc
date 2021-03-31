import logo from './logo.svg';
import './App.css';
//import Welcome from './Components/Welcome'
import Events from './Components/Events';
import List from './Components/List';
import {If, If2} from './Components/If';

function App() {
  return (
    <div className="App">
      <Events />
      <List arr={[1,3,4,5]}/>
      <If arg/>
      <If2 arg={false} />

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
