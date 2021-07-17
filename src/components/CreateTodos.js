import "./CreateTodos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function CreateTodos({ todo, deletetask, edittask }) {
  function Delete() {
    deletetask(todo.task);
  }
  let editformclassname = "todo__edit--form";

  if (todo.editing) {
    editformclassname = "todo__edit__form--toggled";
  }
  function Edit() {
    edittask(todo.id);
  }

  return (
    <section className="todoContainer">
      <button onClick={Delete} className="todo__DeleteButton">
        X
      </button>
      <button className="todo__DoneButton">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button onClick={Edit} className="todo__EditButton">
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <li className="todo__listitem">{todo.task}</li>
      <p className="todo__text">status</p>
      <form className={`${editformclassname}`}>
        <input
          className="todo__edit--input"
          type="text"
          name="editinput"
          id="editinput"
        />
        <button className="todo__edit--button">Save</button>
      </form>
    </section>
  );
}
