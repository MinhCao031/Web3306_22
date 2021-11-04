const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        // required: true,
        enum: [ 'Teacher', 'Student' ]
    },
    level: {
        type: String,
        // required: true,
        enum: [ 'Thành viên', 'Bí thư', 'Lớp trưởng', 'None' ]
    },
    name: {
        type: String
        // required: true
    },
    dateOfBirth: {
        type: Date
        // required: true
    },
    gender: {
        type: String,
        enum: ['Nam', 'Nữ']
    },
    phoneNumber: {
        type: Number
    },
    email: {
        type: String
        // required: true
    },
    introduction: {
        type: String
    },
    hometown: {
        type: String
    },
    fieldOfStudy: {
        type: String
    },
    gpa: {
        type: Number,
    }
});

UserSchema.statics.findAndValidate = async function(username, password) {
    const foundUser = await this.findOne({ username });
    if (foundUser) {
        return await bcrypt.compare(password, foundUser.password);
    }
    return false;
};

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

module.exports = mongoose.model('User', UserSchema);
