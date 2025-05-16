import styles from "./Button.module.scss";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.Button}>
      {text}
    </button>
  );
};

export default Button;
