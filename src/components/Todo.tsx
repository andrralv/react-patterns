import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../redux/todo';
import { RootState } from '../redux/reducers';

const Todo = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch  = useDispatch();

  const handleToggleTodo = (id: number) => {
    dispatch(toggle(id));
  }

  return (
    <ul style={{padding: '0'}}>
      {todos.map(todo => (
        <li style={{listStyleType: 'none', textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} key={todo.id} onClick={() => handleToggleTodo(todo.id)}>
          {todo.text} 
          <span>{'  ' + todo.completed ? '✓' : 'x'}</span>
        </li>
      ))}
    </ul>
  );

}

export default Todo;