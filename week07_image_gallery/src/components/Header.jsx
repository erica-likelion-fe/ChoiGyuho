import styles from "./Header.module.scss";

const Header = ({ title }) => {
  return <div className={styles.Header}>{title}</div>;
};

export default Header;
