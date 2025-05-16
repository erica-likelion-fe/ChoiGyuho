import { useState, useEffect } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import styles from "./Home.module.scss";

const Home = () => {
  const [cardInfoList, setCardInfoList] = useState([]);

  useEffect(() => {
    fetch("/mocks/mockData.json")
      .then((res) => res.json())
      .then((result) => setCardInfoList(result.galleries));
  }, []);

  return (
    <div className={styles.Home}>
      <div className={styles.button_section}>
        <Button text={"Create Post"} />
      </div>
      <div className={styles.card_desc}>Image</div>
      <div className={styles.card_section}>
        {cardInfoList.map((cardInfo) => {
          return (
            <Card
              key={cardInfo.id}
              id={cardInfo.id}
              img={cardInfo.img}
              title={cardInfo.title}
              desc={cardInfo.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
