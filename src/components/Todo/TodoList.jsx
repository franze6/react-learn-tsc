import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import styles from '../../assets/css/TodoList.module.css'

function TodoList({items, onItemClick, onItemDoubleClick}) {


  return (<div className={styles.list}>
      {items.map(item => (
        <TodoItem
          key={item.id}
          onClick={() => onItemClick(item.id)}
          onDoubleClick={() => onItemDoubleClick(item.id)}
          data={item}
        />)
      )}
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemClick: PropTypes.func,
  onItemDoubleClick: PropTypes.func,
}

TodoList.defaultProps = {
  items: [],
  onItemClick: () => {
  },
  onItemDoubleClick: () => {
  },
}

export default TodoList;