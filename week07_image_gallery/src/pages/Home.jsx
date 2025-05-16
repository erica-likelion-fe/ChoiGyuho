import { useState, useEffect } from "react";

import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";

import usePagination from "../hooks/usePagination";

import styles from "./Home.module.scss";

const Home = () => {
  const [cardInfoList, setCardInfoList] = useState([]);
  const {
    currentPage,
    currentData,
    totalPages,
    setCurrentPage,
    goToNextPage,
    goToPrevPage,
  } = usePagination(cardInfoList, 16);

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
        {currentData.map((cardInfo) => {
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

      <Footer
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      />
    </div>
  );
};

export default Home;
