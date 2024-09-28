import React, { useState } from "react";
import { useTaskStore } from "../stores/useTaskStore";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [tab, setTab] = useState(0);
  const taskStore = useTaskStore();

  const handleMarkComplete = (item) => {
    const tasks = [...taskStore.tasks];
    const index = tasks.findIndex((i) => item.id === i.id);
    const updateTask = {
      ...tasks[index],
      isComplete: !tasks[index].isComplete,
    };
    tasks[index] = updateTask;
    taskStore.markComplete(tasks);
  };

  const filteredList = () => {
    const tasks = taskStore.tasks;
    if (tab === 0) {
      return tasks;
    } else if (tab === 1) {
      const pendingTask = tasks.filter((i) => !i.isComplete);
      return pendingTask;
    } else if (tab === 2) {
      return tasks.filter((i) => i.isComplete);
    }
  };
  return (
    <div>
      <div className={styles.tab}>
        <button
          className={styles[tab === 0 ? "activeTab" : ""]}
          onClick={() => setTab(0)}
        >
          All tasks
        </button>
        <button
          className={styles[tab === 1 ? "activeTab" : ""]}
          onClick={() => setTab(1)}
        >
          Pending
        </button>
        <button
          className={styles[tab === 2 ? "activeTab" : ""]}
          onClick={() => setTab(2)}
        >
          Completed
        </button>
      </div>
      <ul>
        {filteredList().map((item) => (
          <li key={item.id} className={styles.item}>
            <span>{item.title}</span>
            <span>
              {item.isComplete ? "Completed" : "Complete"}
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={() => handleMarkComplete(item)}
              />
            </span>
            <button className={styles.edit}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
