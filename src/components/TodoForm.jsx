import React, { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import styles from "./TodoForm.module.css";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const taskStore = useTaskStore();
  console.log(taskStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setError("Title required.");
      return;
    }
    taskStore.insertTask({ id: Math.random(), title, isComplete: false });
    setTitle("");
  };
  return (
    <>
      <form className={styles.formCon} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit">Add</button>
      </form>
      {error.length > 0 && <span className={styles.error}>*{error}</span>}
    </>
  );
}
