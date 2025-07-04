const Task = require('../models/taskData');

exports.postAddTask =  (req, res) => {
  const { task } = req.body;
const newTask = new Task({taskName: task});

newTask.save().then(()=>{
  res.json({ message: task });
})
}
exports.getTask =  (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.error('Error fetching tasks:', err);
      res.status(500).json({ error: 'Failed to fetch tasks' });
    });
}
exports.deleteTask =  (req, res) => {
const taskId = req.params.id;
  Task.findByIdAndDelete(taskId)
    .then(() => res.json({ message: "Task deleted successfully" }))
    .catch((err) => {
      console.error("Error deleting task:", err);
      res.status(500).json({ error: "Failed to delete task" });
    });
}