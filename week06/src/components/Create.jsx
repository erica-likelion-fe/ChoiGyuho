import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import "./Create.css";

const Create = () => {
  const { posts, setPosts } = useOutletContext();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title || !content) return;
    setPosts([...posts, { title, content }]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="Create">
      <input
        className="create_title"
        type="text"
        placeholder="제목 입력"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        className="create_content"
        placeholder="내용 입력"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button onClick={handleAdd}>추가</button>
    </div>
  );
};

export default Create;
