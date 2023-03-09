const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    body: {
        type: String,
        required: [true, 'must provide body'],
        trim: true,
        maxlength: [200, 'name cannot be more than 200 chars']
    },
    isDone: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)