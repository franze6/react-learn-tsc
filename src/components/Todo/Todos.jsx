import TodoList from "./TodoList";
import styles from '../../assets/css/Todos.module.css'
import {nanoid} from 'nanoid';
import Button from "./Button";
import { useState, useEffect, useContext } from 'react';
import AppContext from "../../appContext";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [, setAppData] = useContext(AppContext)

  const addTodo = () => {
    setTodos(
      [
        ...todos,
        {
          id: nanoid(),
          title: 'Новая задача',
          completed: false
        }
      ]
    );
  }

  const deleteTodo = (id) => {
    if(!id)
      return;
    setTodos(
      todos.filter(curr => curr.id !== id)
    );
  }

  const toggleTodo = (id) => {
    if(!id)
      return;
    setTodos(prev =>
      prev.map(curr => {
        if(curr.id !== id)
          return curr;

        return {
          ...curr,
          completed: !curr.completed
        }
      })
    )
  }

  useEffect(() => {
    if (todos.length === 0)
      return;
    localStorage.setItem('todos', JSON.stringify(todos));
    setAppData(prev => ({
      ...prev,
      todos
    }), [todos]);
  }, [todos, setAppData])

  useEffect(() => {
    const json = localStorage.getItem('todos');
    if(!json)
      return;

    try {
      const localTodos = JSON.parse(json);
      setTodos(localTodos);
    }
    catch {
      console.error('Ошибка при парсе JSON');
    }
  }, [])

  return (
    <div className={styles.todos}>
      <div>
        <div className={styles.btnContainer}>
          <Button text="Добавить" onClick={addTodo}/>
        </div>
        <TodoList items={todos} onItemClick={toggleTodo} onItemDoubleClick={deleteTodo}/>
      </div>
    </div>
  );
}

export default Todos;