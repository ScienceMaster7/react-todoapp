import "./App.css";
import { useState } from "react";
import CreateTodos from "./components/CreateTodos";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const newTodo = form.todoInput.value;

    const addTodos = [
      ...todos,
      {
        id: uuidv4(),
        task: newTodo,
        editing: false,
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

  function handleEditButtonClick(id) {
    const showeditor = todos.filter((todo) => {
      return todo.id === id ? (todo.editing = true) : todo.task;
    });
    setTodos(showeditor);
  }

  function handleEditSubmit(editedTask, id) {
    const addedit = todos.filter((todo) => {
      return todo.id === id ? (todo.task = editedTask) : todo.task;
    });
    setTodos(addedit);
  }

  const todoList = todos.map((todo, index) => {
    return (
      <CreateTodos
        key={index}
        todo={todo}
        deletetask={handleDeleteButtonClick}
        showeditor={handleEditButtonClick}
        edittask={handleEditSubmit}
      />
    );
  });

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="./logo192.png" alt="react logo" />
        <form className="form" onSubmit={handleSubmit}>
          <select className="addTodo__Select" name="selectTodo" id="selectTodo">
            <option value="All">All</option>
            <option value="Done">Done</option>
          </select>

          <input
            className="addTodo__Input"
            type="text"
            name="todoInput"
            id="todoInput"
            placeholder="What needs to be done ?"
            autoComplete="off"
          />
          <button className="addTodo__Button">Add</button>
        </form>
      </header>
      <main className="content">{todoList}</main>
      <footer>
        <p className="footer">Made with ❤️ by ScienceMaster7 </p>
      </footer>
    </div>
  );
}

export default App;
