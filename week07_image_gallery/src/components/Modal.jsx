import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, onViewPost, message, viewButtonText }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.message}>{message}</div>
        <button className={styles.viewButton} onClick={onViewPost}>
          {viewButtonText}
        </button>
        <button className={styles.cancelButton} onClick={onClose}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Modal;
