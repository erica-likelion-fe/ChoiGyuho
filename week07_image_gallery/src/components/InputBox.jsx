import styles from "./InputBox.module.scss";

const InputBox = ({
  label,
  name,
  value,
  onChange,
  maxLength,
  placeholder,
  required = true,
}) => {
  return (
    <section className={styles.section}>
      <label className={styles.label}>
        {label} {required && "*"}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        className={styles.textInput}
        placeholder={placeholder}
      />
      <div className={styles.hint}>
        *Please enter no more than {maxLength} characters.
      </div>
    </section>
  );
};

export default InputBox;
