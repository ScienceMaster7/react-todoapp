import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="./logo192.png" alt="react logo" />
        <form>
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
    </div>
  );
}

export default App;
