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
        enum: [ 'teacher', 'student' ]
    },
    firstName: {
        type: String
        // required: true
    },
    lastName: {
        type: String
        // required: true
    },
    dateOfBirth: {
        type: Date
        // required: true
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
