import "./App.css";
import { useState } from "react";
import CreateTodos from "./components/CreateTodos";

function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newTodo = form.todoInput.value;

    const addTodos = [
      ...todos,
      {
        task: newTodo,
        completed: false,
      },
    ];

    setTodos(addTodos);

    form.reset();
  }

  function handleDeleteButtonClick(task) {
    const updatedTodos = todos.filter((todo) => {
      return todo.task !== task;
    });
    setTodos(updatedTodos);
  }

  const todoList = todos.map((todo, index) => {
    return (
      <CreateTodos
        key={index}
        todo={todo}
        deletetask={handleDeleteButtonClick}
      />
    );
  });

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="./logo192.png" alt="react logo" />
        <form onSubmit={handleSubmit}>
          <input
            className="addTodoInput"
            type="text"
            name="todoInput"
            id="todoInput"
            placeholder="What needs to be done ?"
            autoComplete="off"
          />
          <button className="addTodoButton">Add</button>
        </form>
      </header>
      <main className="content">{todoList}</main>
    </div>
  );
}

export default App;
