import "./CreateTodos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function CreateTodos({
  todo,
  deletetask,
  showeditor,
  edittask,
}) {
  function Delete() {
    deletetask(todo.task);
  }
  let editformclassname = "todo__edit--form";

  if (todo.editing) {
    editformclassname = "todo__edit__form--toggled";
  }
  function Edit() {
    showeditor(todo.id);
  }

  function NewEditedTask(event) {
    event.preventDefault();
    const form = event.target;
    const editedTask = form.editinput.value;

    if (editedTask !== null && editedTask !== undefined && editedTask !== "") {
      edittask((todo.task = editedTask), todo.id);
    } else {
      alert("You can't leave the input field empty");
    }

    form.reset();
    console.log(editformclassname);
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
      <form onSubmit={NewEditedTask} className={`${editformclassname}`}>
        <input
          className="todo__edit--input"
          type="text"
          name="editinput"
          id="editinput"
          autoComplete="off"
        />
        <button className="todo__edit--button">Save</button>
      </form>
    </section>
  );
}
