import mongoose from "mongoose";
const TaskSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enums: ['low', 'medium', 'high'],
        default: 'low'
    },
    status: {
        type: String,
        enums: ['pending' , 'completed'],
        default: 'pending'
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Task', TaskSchema)