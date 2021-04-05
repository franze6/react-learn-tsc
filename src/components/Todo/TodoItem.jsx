import styles from '../../assets/css/TodoItem.module.css';
import cn from 'classnames';

function TodoItem({data, onClick}) {
  const {title, completed} = data;
  return (
    <div className={cn(styles.item, {[styles.completed]: completed})} onClick={onClick}>
      <div>{title}</div>
    </div>
  );
}

export default TodoItem;