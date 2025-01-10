import styles from "./todoitem.module.css";
import TodoList from "./TodoList";
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button clicked for item : ", item);
    setTodos(todos.filter((todo) => todo.name !== item.name));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  const textClassName = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={textClassName} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
