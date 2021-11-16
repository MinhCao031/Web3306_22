const config = require('./config/config');
const User = require('./models/User.js');

const mongoose = require('mongoose');

const { db: { host, port, name } } = config;
const dbUrl = `mongodb://${host}:${port}/${name}`;
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose
    .connect(dbUrl, dbOptions)
    .then(() => {
        console.log('Connection openned!');
    })
    .catch((err) => {
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
    gpa,
    drl
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
        gpa: gpa,
        drl: drl
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
    '2001-03-02',
    'Nam',
    0868466825,
    'thainguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    3.0,
    80
);

registerNewUser(
    19021364,
    'Quang25879',
    'Student',
    'Bí thư',
    'Nguyễn Quang',
    '2001-03-02',
    'Nam',
    0868454985,
    'quangnguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    3.5,
    55
);

registerNewUser(
    19021365,
    'Trung25879',
    'Student',
    'Lớp trưởng',
    'Nguyễn Trung',
    '2001-03-02',
    'Nam',
    0868464023,
    'trungnguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    3.95,
    95
);

registerNewUser(
    10012019,
    'Tu25879',
    'Teacher',
    'None',
    'Nguyễn Tú',
    '2001-03-02',
    'Nữ',
    08684643573,
    'tunguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    0.0,
    0.0
);

registerNewUser(
    10022019,
    'Mai25879',
    'Teacher',
    'None',
    'Nguyễn Mai',
    '2001-03-02',
    'Nữ',
    08684643510,
    'mainguyen.uet@gmail.com',
    'Hà Nội',
    'A daily-updated person',
    'Computer Science',
    0.0,
    0.0
);
