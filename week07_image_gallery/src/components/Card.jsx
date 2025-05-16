import styles from "./Card.module.scss";

const Card = ({ img, title, desc }) => {
  return (
    <div className={styles.Card}>
      <img className={styles.card_img} alt="card" src={img} />
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Card;
