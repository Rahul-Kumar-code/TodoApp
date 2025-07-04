import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //Fetch all tasks
  const fetchTasks = () => {
    fetch("https://todoapp-17fc.onrender.com/api/")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  //Add new task
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    fetch("https://todoapp-17fc.onrender.com/api/add-task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: newTask }),
    })
      .then((res) => res.json())
      .then(() => {
        setNewTask("");
        fetchTasks();
      })
      .catch((err) => console.error("Failed to add task:", err));
  };
  //delete task
  const handleDeleteTask = (taskId) => {
    fetch(`https://todoapp-17fc.onrender.com/api/delete-task/${taskId}`, {
      method: "DELETE",
    })
      .then(() => fetchTasks())
      .catch((err) => console.error("Failed to delete task:", err));
  };

  return (
    <div className="w-full mt-6 px-4">
      <div className="flex items-center gap-2 mb-6 ml-7">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAddTask();
          }}
          className="w-full sm:w-full border-2 border-emerald-500 p-4 rounded-full font-semibold"
          placeholder="Enter a task"
        />
        <button
          onClick={handleAddTask}
          className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 
                     px-7 py-4 cursor-pointer text-white border-2 rounded-3xl font-semibold 
                     hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:scale-105 transition-transform duration-200"
        >
          Add
        </button>
      </div>

      <ul className="flex flex-col items-center gap-4">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="flex items-center justify-between w-full max-w-xl 
                       bg-gradient-to-r from-emerald-400 to-cyan-400 
                       px-6 py-4 rounded-full shadow-md"
          >
            <span className="text-gray-800 text-lg font-semibold break-words">
              {task.taskName}
            </span>
            <button
              onClick={() => handleDeleteTask(task._id)}
              className="bg-red-400 text-white text-xl p-3 ml-4 
                         rounded-2xl hover:scale-105 transition-transform 
                         hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] cursor-pointer"
            >
              <MdDelete />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
