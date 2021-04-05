import logo from './logo.svg';
import './App.css';
import Todos from './components/Todo/Todos';
import Header from "./components/Header/header";
import './colors.sass';
import {useState} from 'react'
import AppContext from "./appContext";

function App() {
  const [appData, setAppData] = useState({});

  return (
    <AppContext.Provider value={[appData, setAppData]}>
      <div className="app">
        <Header/>
        <Todos/>
      </div>
    </AppContext.Provider>
  );
}

export default App
