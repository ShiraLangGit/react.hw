import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="הוסיפי משימה..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border p-2 rounded-lg"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        אישור
      </button>
    </form>
  );
}
