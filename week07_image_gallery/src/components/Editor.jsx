import { useState, useEffect, useRef } from "react";
import styles from "./Editor.module.scss";
import Button from "./Button";
import InputBox from "./InputBox";

const Editor = ({ initData, onSubmit, buttonText }) => {
  const [input, setInput] = useState({
    imageFile: null,
    title: "",
    description: "",
  });
  const fileInputRef = useRef();

  useEffect(() => {
    if (initData) {
      setInput({
        imageFile: initData.imageFile || null,
        previewUrl: initData.previewUrl || initData.img || null,
        title: initData.title || "",
        description: initData.description || "",
      });
    }
  }, [initData]);

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setInput((prev) => ({ ...prev, imageFile: files[0] }));
    } else {
      setInput((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onClickUploadArea = () => {
    fileInputRef.current.click();
  };

  const onSubmitClick = () => {
    const img = input.imageFile
      ? URL.createObjectURL(input.imageFile)
      : initData?.img || null;

    onSubmit({ ...input, img });
  };

  const { imageFile, title, description } = input;
  const isComplete = imageFile && title && description;

  return (
    <div className={styles.Editor}>
      <section className={styles.section}>
        <label className={styles.label}>Image *</label>
        <div className={styles.uploadBox} onClick={onClickUploadArea}>
          {input.imageFile ? (
            <img
              src={URL.createObjectURL(input.imageFile)}
              alt="preview"
              className={styles.preview}
            />
          ) : input.previewUrl ? (
            <img
              src={input.previewUrl}
              alt="preview"
              className={styles.preview}
            />
          ) : (
            <span>Drag and drop your file here.</span>
          )}
        </div>

        <div className={styles.uploadButton}>
          <Button text="My PC" onClick={onClickUploadArea} isActive={true} />
        </div>

        <input
          type="file"
          accept="image/*"
          name="image"
          ref={fileInputRef}
          onChange={onChange}
          className={styles.hiddenFileInput}
        />
      </section>

      <InputBox
        label="Title"
        name="title"
        value={input.title}
        onChange={onChange}
        maxLength={20}
        placeholder="Text"
      />

      <InputBox
        label="Description"
        name="description"
        value={input.description}
        onChange={onChange}
        maxLength={200}
        placeholder="Description"
      />

      <Button
        className={styles.submitButton}
        onClick={onSubmitClick}
        isActive={isComplete}
        text={buttonText}
      />
    </div>
  );
};

export default Editor;
