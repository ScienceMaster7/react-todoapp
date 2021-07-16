import "./CreateTodos.css";

export default function CreateTodos({ todo, deletetask }) {
  function Delete() {
    deletetask(todo.task);
  }
  return (
    <section className="todoContainer">
      <button onClick={Delete} className="todo__DeleteButton">
        X
      </button>
      <li className="todo__listitem">{todo.task}</li>
      <p className="todo__text">status</p>
    </section>
  );
}
