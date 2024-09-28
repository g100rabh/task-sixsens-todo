import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTaskStore } from "./stores/useTaskStore";

function App() {
  const taskStore = useTaskStore();
  console.log(taskStore.tasks);
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
