import "./App.css";

import Header from "./Components/Header";
import InputTodo from "./Components/InputTodo";
import TodoList from "./Components/TodoList";

function TodoApp() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoApp;
