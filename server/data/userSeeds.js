const User = require('../models/user');

const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/uet-smta', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection openned!');
    })
    .catch((err) => {
        console.log('Error!');
        console.log(err);
    });

const registerNewUser = (
    username,
    password,
    role,
    level,
    name,
    dateOfBirth,
    gender,
    phoneNumber,
    email,
    hometown,
    introduction,
    fieldOfStudy,
    gpa
) => {
    const user = new User({
        username: username,
        password: password,
        role: role,
        level: level,
        name: name,
        dateOfBirth: dateOfBirth,
        gender: gender,
        phoneNumber: phoneNumber,
        email: email,
        hometown: hometown,
        introduction: introduction,
        fieldOfStudy: fieldOfStudy,
        gpa: gpa
    });

    user
        .save()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

registerNewUser(
    19021363,
    'Thai25879',
    'Student',
    'Thành viên',
    'Nguyễn Thái',
    '02/03/2001',
    'Nam',
    0868466825,
    'thainguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    3.0
);

registerNewUser(
    19021364,
    'Quang25879',
    'Student',
    'Bí thư',
    'Nguyễn Quang',
    '02/03/2001',
    'Nam',
    0868454985,
    'quangnguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    3.5
);

registerNewUser(
    19021365,
    'Trung25879',
    'Student',
    'Lớp trưởng',
    'Nguyễn Trung',
    '02/03/2001',
    'Nam',
    0868464023,
    'trungnguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    3.95
);


// const student02 = new User({
//     username: 19021364,
//     password: 'Thai25879',
//     role: 'Student',
//     level: 'Bí thư',
//     name: 'Nguyễn Quang',
//     dateOfBirth: '02/03/2001',
//     gender: 'Nam',
//     phoneNumber: 0868466825,
//     email: 'quangnguyen.uet@gmail.com',
//     hometown: 'Hải Hưng',
//     introduction: "Hello it's Quang",
//     fieldOfStudy: 'Computer Science',
//     gpa: 3.9
// });

// const student03 = new User({
//     username: 19021365,
//     password: 'Thai25879',
//     role: 'Student',
//     level: 'Lớp trưởng',
//     name: 'Nguyễn Quỳnh',
//     dateOfBirth: '02/03/2001',
//     gender: 'Nữ',
//     phoneNumber: 0868466825,
//     email: 'quynhnguyen.uet@gmail.com',
//     hometown: 'Hải Dương',
//     introduction: 'Hmmmm',
//     fieldOfStudy: 'Information Technology',
//     gpa: 3.95
// });


registerNewUser(
    10012019,
    'Tu25879',
    'Teacher',
    'None',
    'Nguyễn Tú',
    '02/03/2001',
    'Nữ',
    08684643573,
    'tunguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    0.0
);

registerNewUser(
    10022019,
    'Mai25879',
    'Teacher',
    'None',
    'Nguyễn Mai',
    '02/03/2001',
    'Nữ',
    08684643510,
    'mainguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    0.0
);


// const teacher01 = new User({
//     username: 10012019,
//     password: 'Thai25879',
//     role: 'Teacher',
//     level: 'None',
//     name: 'Nguyễn Tú',
//     dateOfBirth: '02/03/2001',
//     gender: 'Nữ',
//     phoneNumber: 0868466825,
//     email: 'tunguyen.uet@gmail.com',
//     hometown: '',
//     introduction: 'This is teacher 01',
//     fieldOfStudy: 'Computer Science',
//     gpa: 0.0
// });

// const teacher02 = new User({
//     username: 10022019,
//     password: 'Thai25879',
//     role: 'Teacher',
//     level: 'None',
//     name: 'Nguyễn Minh Quang',
//     dateOfBirth: '02/03/2001',
//     gender: 'Nam',
//     phoneNumber: 0868466825,
//     email: 'mquangnguyen.uet@gmail.com',
//     hometown: '',
//     introduction: 'This is teacher 02',
//     fieldOfStudy: 'Computer Science',
//     gpa: 0.0
// });