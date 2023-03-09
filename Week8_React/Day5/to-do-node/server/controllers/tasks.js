const Task = require('../models/Task')

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.json(task)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        console.log(tasks)
        res.json(tasks)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

const getOneTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.json(task)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.json(task)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.json(task)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

module.exports = {
    createTask,
    getTasks,
    getOneTask,
    updateTask,
    deleteTask
}