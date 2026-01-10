import React from "react";

export default function TodoItem({ task, onDelete, onDone }) {
  const bgColor = task.done ? "bg-green-200" : "bg-red-100";

  return (
    <li
      className={`flex justify-between items-center p-3 rounded-xl ${bgColor}`}
    >
      <span
        className={`font-medium ${
          task.done ? "line-through text-gray-600" : ""
        }`}
      >
        {task.title}
      </span>

      <div className="space-x-2">
        {!task.done && (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm"
            onClick={() => onDone(task.id)}
          >
            בוצעה
          </button>
        )}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm"
          onClick={() => onDelete(task.id)}
        >
          מחק
        </button>
      </div>
    </li>
  );
}
