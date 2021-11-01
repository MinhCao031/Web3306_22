const mongooes = require("mongoose");

const classSchema = new mongooes.Schema({
    classId: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    teacherId: {
        type: Number,
        required: true
    },
    studentIds: {
        type: [Number],
        required: true
    }
})

const Class = mongooes.model("Class", classSchema);

module.exports = Class;