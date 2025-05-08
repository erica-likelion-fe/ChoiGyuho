import { useOutletContext } from "react-router-dom";
import "./Display.css";

const Display = () => {
  const { selectedPost } = useOutletContext();

  return (
    <div className="Display">
      <div>{selectedPost.title}</div>
      <div>{selectedPost.content}</div>
    </div>
  );
};

export default Display;
