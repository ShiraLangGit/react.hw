import React from "react";

export default function Dialog({ bgColor, onClose, children }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40">
      <div
        className="rounded-xl p-4 relative shadow-lg"
        style={{ backgroundColor: bgColor || "white" }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-lg font-bold"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
