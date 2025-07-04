const express = require('express');
const taskController = require('../controller/task')
const router = express.Router();

router.post('/add-task',taskController.postAddTask);
router.get('/',taskController.getTask);
router.delete('/delete-task/:id',taskController.deleteTask);

module.exports = router;