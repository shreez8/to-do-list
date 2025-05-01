"use client";

import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskDone = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="min-h-screen p-8 bg-base-200">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">To-Do List</h1>
        <button
          className="btn btn-primary"
          onClick={() => setTasks([])}
        >
          Clear All
        </button>
      </div>
      <div className="form-control mb-4">
        <div className="input-group">
          <input
            type="text"
            placeholder="Add a new task"
            className="input input-bordered w-full"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-secondary" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-4 rounded-lg shadow-md cursor-pointer ${
              task.done ? "bg-green-500 text-white" : "bg-base-100"
            }`}
            onClick={() => toggleTaskDone(index)}
          >
            <span
              className={`flex-1 ${task.done ? "line-through" : ""}`}
            >
              {task.text}
            </span>
            <button
              className="btn btn-error btn-sm"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
