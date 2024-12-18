import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    isCompleted: {type: Boolean, required: true},
    description: {type: String, required: false},
    creator: {type: String, required: false},
});

const todoModel = mongoose.model('Task', todoSchema);

export default todoModel;