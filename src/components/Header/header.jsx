import '../../assets/sass/header.sass'
import { useContext, useMemo } from 'react';
import AppContext from "../../appContext";

function Header({text, onClick}) {
  const [appData] = useContext(AppContext);


  const [completed, inWork] = useMemo(() => {
    const todos = appData.todos;
    if(!todos)
      return [0,0];
    return [todos.filter(curr => curr.completed).length, todos.filter(curr => !curr.completed).length]
  }, [appData.todos])

  return (
    <div className="header">
      <div className="header__info">
        <div className="header__info_completed">Выполнено: {completed}</div>
        <div className="header__info_work">В работе: {inWork}</div>
      </div>
    </div>
  );
}

export default Header;