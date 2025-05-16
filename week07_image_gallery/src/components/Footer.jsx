import styles from "./Footer.module.scss";
import prevIcon from "../assets/left.svg";
import nextIcon from "../assets/right.svg";

const Footer = ({
  currentPage,
  totalPages,
  setCurrentPage,
  goToPrevPage,
  goToNextPage,
}) => {
  return (
    <div className={styles.footer}>
      <img
        src={prevIcon}
        alt="Previous"
        className={styles.arrow}
        onClick={goToPrevPage}
      />

      {[...Array(totalPages)].map((_, idx) => {
        const pageNum = idx + 1;
        return (
          <button
            key={pageNum}
            onClick={() => setCurrentPage(pageNum)}
            className={`${styles.pageButton} ${
              pageNum === currentPage ? styles.active : ""
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      <img
        src={nextIcon}
        alt="Next"
        className={styles.arrow}
        onClick={goToNextPage}
      />
    </div>
  );
};

export default Footer;
