import TodoList from "./TodoList";
import styles from './Todos.module.css'
import {nanoid} from 'nanoid';

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

    return (
        <div className={styles.todos}>
            <TodoList items={defaultTodos} />
        </div>
    );
}

export default Todos;