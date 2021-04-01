import TodoList from "./TodoList";
import styles from '../../assets/css/Todos.module.css'
import {nanoid} from 'nanoid';
import Button from "./Button";

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

    const addTodo = () => {
        alert('Мы пока не умеем добавлять!');
    }

    return (
        <div className={styles.todos}>
            <div>
                <div className={styles.btnContainer}>
                    <Button text="Добавить"  onClick={addTodo}/>
                </div>
                <TodoList items={defaultTodos} />   
            </div>
        </div>
    );
}

export default Todos;