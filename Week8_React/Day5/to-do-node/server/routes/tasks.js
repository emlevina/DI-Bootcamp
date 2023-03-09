const express = require('express');
const router = express.Router();
const { createTask, getTasks, getOneTask, updateTask, deleteTask } = require('../controllers/tasks');

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router;
