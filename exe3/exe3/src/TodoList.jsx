import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Dialog from "./Dialog";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "לשטוף כלים", done: false },
    { id: 2, title: "לסיים שיעורי בית", done: true },
    { id: 3, title: "לקנות מצרכים", done: false },
  ]);

  const [showDialog, setShowDialog] = useState(false);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setShowDialog(true);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const markAsDone = (id) => {
    const updated = tasks.map((t) => (t.id === id ? { ...t, done: true } : t));
    setTasks(updated);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-96">
      <TodoForm onAdd={addTask} />

      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onDone={markAsDone}
          />
        ))}
      </ul>

      {showDialog && (
        <Dialog bgColor="#d1fae5" onClose={() => setShowDialog(false)}>
          <h3 className="text-lg font-bold">הצלחה </h3>
          <p>המשימה נוספה בהצלחה!</p>
        </Dialog>
      )}
    </div>
  );
}
