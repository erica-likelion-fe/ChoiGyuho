import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Modal from "../components/Modal";
import styles from "./Edit.module.scss";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (location.state?.post) {
      const { id, img, title, desc } = location.state.post;
      setInput({
        id,
        imageFile: null,
        previewUrl: img,
        title,
        description: desc,
      });
    } else {
      fetch("/mocks/mockData.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.galleries?.find((item) => item.id === Number(id));
          if (found) {
            setInput({
              id: found.id,
              imageFile: null,
              previewUrl: found.img,
              title: found.title,
              description: found.desc,
            });
          } else {
            setInput("notfound");
          }
        })
        .catch(() => {
          setInput("notfound");
        });
    }
  }, [location.state, id]);

  const handleSubmit = ({ imageFile, title, description }) => {
    const updatedPost = {
      id: input.id,
      img: imageFile ? URL.createObjectURL(imageFile) : input.previewUrl,
      title,
      desc: description,
    };

    setIsModalOpen(true);
    setInput((prev) => ({
      ...prev,
      title,
      description,
      imageFile,
      previewUrl: updatedPost.img,
    }));
  };

  if (input === "notfound") return <div>존재하지 않는 게시글입니다.</div>;
  if (!input) return <div>불러오는 중...</div>;

  return (
    <div className={styles.Edit}>
      <Editor
        initData={input}
        onSubmit={handleSubmit}
        buttonText="Changes Saved"
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onViewPost={() => {
          setIsModalOpen(false);
          navigate(`/posted/${input.id}`, {
            state: {
              post: {
                id: input.id,
                img: input.previewUrl,
                title: input.title,
                desc: input.description,
              },
            },
          });
        }}
        message={"Post successfully edited.!\nSee Changes?"}
        viewButtonText={"VIEW POST !"}
      />
    </div>
  );
};

export default Edit;
