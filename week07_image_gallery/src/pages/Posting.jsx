import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import Modal from "../components/Modal";
import styles from "./Posting.module.scss";

const Posting = () => {
  const [galleries, setGalleries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostId, setNewPostId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/mocks/mockData.json")
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data.galleries);
      });
  }, []);

  const handleSubmit = ({ imageFile, title, description }) => {
    const newId = galleries.length + 1 + 32;
    const newPost = {
      id: newId,
      img: URL.createObjectURL(imageFile),
      title,
      desc: description,
    };
    setGalleries((prev) => [...prev, newPost]);

    setNewPostId(newId);
    setIsModalOpen(true);
  };

  return (
    <div className={styles.Posting}>
      <Editor onSubmit={handleSubmit} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onViewPost={() => {
          setIsModalOpen(false);
          navigate(`/posted/${newPostId}`);
        }}
        message={"Post published!\nDo you want to see it?"}
        viewButtonText={"VIEW POST !"}
      />
    </div>
  );
};

export default Posting;
