import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({ text, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.Button, {
        [styles.inactive]: !isActive,
      })}
    >
      {text}
    </button>
  );
};

export default Button;
