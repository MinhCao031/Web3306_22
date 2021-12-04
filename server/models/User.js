const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

const UserSchema = new Schema(
    {
        username: {
            type: String,
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
            enum: [ 'Nam', 'Nữ' ]
        },
        phoneNumber: {
            type: String
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
            type: Number
        },
        drl: {
            type: Number
        },
        credit: {
            type: String,
            enum: [ 'Đủ', 'Thiếu' ]
        },
        tuition: {
            type: String,
            enum: [ 'Đủ', 'Thiếu' ]
        },
        parentPhoneNumber: {
            type: String
        }
    },
    { timestamps: true }
);

UserSchema.statics.findAndValidate = async function(username, password) {
    const foundUser = await this.findOne({ username });

    if (foundUser) {
        return await bcrypt.compare(password, foundUser.password);
    }
    return false;
};

UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    return next();
});

module.exports = mongoose.model('User', UserSchema);
