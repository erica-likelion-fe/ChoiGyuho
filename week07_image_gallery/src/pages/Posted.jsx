import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import styles from "./Posted.module.scss";

const Posted = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.state?.post) {
      setPost(location.state.post);
      return;
    }

    fetch("/mocks/mockData.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.galleries.find((item) => item.id === Number(id));
        setPost(found);
      });
  }, [id, location.state]);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    nav("/", { replace: true });
  };

  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div className={styles.Posted}>
      <div className={styles.contentWrapper}>
        <img src={post.img} alt={post.title} className={styles.image} />
        <div className={styles.title}>
          <div>{post.title}</div>
        </div>
      </div>
      <div className={styles.desc}>{post.desc}</div>
      <div className={styles.buttonWrapper}>
        <Button text="Delete Post" onClick={handleDelete} isActive={true} />
        <Button
          text="Edit Post"
          onClick={() =>
            nav(`/edit/${post.id}`, {
              state: { post },
            })
          }
          isActive={true}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onViewPost={handleConfirmDelete}
        message={"Are you sure you want to\ndelete this post?"}
        viewButtonText={"DELETE"}
      />
    </div>
  );
};

export default Posted;
