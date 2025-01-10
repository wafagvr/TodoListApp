// const header = { color: "grey", fontSize: "100px" };
import styles from "./inlinecomponent.module.css";
export default function InlineComponent() {
  return (
    <div>
      <h1 className={styles.header}>Inline Component</h1>
    </div>
  );
}
