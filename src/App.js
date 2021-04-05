import logo from './logo.svg';
import './App.css';
import Todos from './components/Todo/Todos';
import Header from "./components/Header/header";
import './colors.sass';

function App() {
  return (
    <div className="app">
      <Header />
      <Todos/>
    </div>
  );
}

export default App
