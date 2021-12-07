const mongooes = require('mongoose');

const ClassSchema = new mongooes.Schema({
    classId: {
        type: String,
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
        type: String,
        required: true
    },
    studentIds: {
        type: [ String ],
        required: true
    },
    leaderId: {
        type: String,
        required: true
    }
});

const Class = mongooes.model('Class', ClassSchema);

module.exports = Class;
