///import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
