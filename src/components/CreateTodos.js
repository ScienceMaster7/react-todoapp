export default function CreateTodos({ todo, deletetask }) {
  function Delete() {
    deletetask(todo.task);
  }
  return (
    <div className="todoContainer">
      <button onClick={Delete} className="todoDeleteButton">
        X
      </button>
      <li>{todo.task}</li>
      <p>status</p>
    </div>
  );
}
