import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    isCompleted: {type: Boolean, required: true, default: false},
    description: {type: String, required: false, default:""},
    creator: {type: String, required: false, default:""},
});

const todoModel = mongoose.model('Task', todoSchema);

export default todoModel;