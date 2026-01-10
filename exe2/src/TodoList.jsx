import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const initialTasks = ["לקנות מצרכים", "לסדר את החדר", "לסיים את שיעורי הבית"];

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const taskText = newTask.trim();

    if (taskText === "") {
      console.error("נא להזין משימה לפני האישור.");
      return;
    }

    if (tasks.includes(taskText)) {
      console.error(`המשימה "${taskText}" כבר קיימת ברשימה.`);
      setNewTask("");
      return;
    }

    setTasks([...tasks, taskText]);
    setNewTask("");
  };

  return (
    <div>
      <h1>רשימת משימות - Todo-List-App</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="task"
          value={newTask}
          onChange={handleInputChange}
          placeholder="הכנס משימה חדשה..."
        />
        <button type="submit">הוסף</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} />
        ))}
      </ul>

      <p>סה"כ משימות ברשימה: {tasks.length}</p>
    </div>
  );
}
