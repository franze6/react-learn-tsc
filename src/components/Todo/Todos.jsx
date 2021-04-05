import TodoList from "./TodoList";
import styles from '../../assets/css/Todos.module.css'
import {nanoid} from 'nanoid';
import Button from "./Button";
import { useState } from 'react';

function Todos() {
  const defaultTodos = [
    {
      id: nanoid(),
      title: 'Задача 1',
      completed: false,
    },
    {
      id: nanoid(),
      title: 'Задача 2',
      completed: false,
    },
    {
      id: nanoid(),
      title: 'Задача 3',
      completed: false,
    },
    {
      id: nanoid(),
      title: 'Задача 4',
      completed: true,
    },
  ];

  const [todos, setTodos] = useState(defaultTodos);

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