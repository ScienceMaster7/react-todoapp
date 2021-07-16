import "./CreateTodos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function CreateTodos({ todo, deletetask }) {
  function Delete() {
    deletetask(todo.task);
  }
  return (
    <section className="todoContainer">
      <button onClick={Delete} className="todo__DeleteButton">
        X
      </button>
      <button className="todo__DoneButton">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="todo__EditButton">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <li className="todo__listitem">{todo.task}</li>
      <p className="todo__text">status</p>
    </section>
  );
}
