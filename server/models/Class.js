const mongooes = require('mongoose');

const ClassSchema = new mongooes.Schema({
    classId: {
        type: Number,
        required: true,
        unique: true
    },
    className: {
        type: String,
        required: true
    },
    classType: {
        type: String,
        required: true,
        enum: [ 'CLC', 'Thường' ]
    },
    teacherId: {
        type: Number,
        required: true
    },
    studentIds: {
        type: [ Number ],
        required: true
    },
    leaderId: {
        type: Number,
        required: true
    }
});

const Class = mongooes.model('Class', ClassSchema);

module.exports = Class;
