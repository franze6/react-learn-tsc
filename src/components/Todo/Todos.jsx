import TodoList from "./TodoList";
import styles from '../../assets/css/Todos.module.css'
import {nanoid} from 'nanoid';
import Button from "./Button";
import { useState, useEffect, useContext, memo, useCallback } from 'react';
import AppContext from "../../appContext";

const Todos = memo(() => {
  const [todos, setTodos] = useState([]);
  const [, setAppData] = useContext(AppContext)

  const addTodo = useCallback(() => {
    setTodos( prev =>
      [
        ...prev,
        {
          id: nanoid(),
          title: 'Новая задача',
          completed: false
        }
      ]
    );
  }, [setTodos])

  const deleteTodo = useCallback((id) => {
    if(!id)
      return;
    setTodos(prev =>
      prev.filter(curr => curr.id !== id)
    );
  }, [setTodos])

  const toggleTodo = useCallback((id) => {
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
  }, [setTodos])

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
})

Todos.displayName = 'Todos';

export default Todos;