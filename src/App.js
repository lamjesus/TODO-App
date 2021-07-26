import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <h1 className="text-center mb-4">TODO LIST</h1>
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
