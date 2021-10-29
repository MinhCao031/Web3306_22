const mongooes = require("mongoose");

const scoreTableSchema = new mongooes.Schema({
    scoreTableId: {
        type: Number,
        required: true,
        unique: true
    },
    semester: {
        type: [String],
        required: true
    },
    info: {
        semester: {
            type: String,
            required: true
        },
        gpa: {
            type: Number,
            required: true,
            default: 0
        },
        cpa: {
            type: Number,
            required: true,
            default: 0
        },
        drl: {
            type: Number,
            required: true,
            default: 0
        }
    }    
})

const ScoreTable = mongooes.model("ScoreTable", scoreTableSchema);

module.exports = ScoreTable;