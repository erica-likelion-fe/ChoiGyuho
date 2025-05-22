import { useNavigate } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ id, img, title, desc }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(`/posted/${id}`);
  };

  return (
    <div className={styles.Card} onClick={handleClick}>
      <img className={styles.card_img} alt="card" src={img} />
      <div className={styles.title}>{title}</div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default Card;
