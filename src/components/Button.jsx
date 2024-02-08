/*eslint-disable */
import styles from "./Button.module.css";

function Button({ onClick, children, type }) {
  return (
    <div>
      <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
