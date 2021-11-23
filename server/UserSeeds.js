const config = require('./config/config');
const User = require('./models/User.js');

const mongoose = require('mongoose');

const {
  db: { host, port, name },
} = config;
const dbUrl = `mongodb://${host}:${port}/${name}`;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(dbUrl, dbOptions)
  .then(() => {
    console.log('Connection openned!');
  })
  .catch((err) => {
    console.log(err);
  });

var studentUsername = 19021300;
var teacherUsername = 20191000;

const studentQuantity = 270;
const teacherQuantity = 3;

const studentIds = [];
const teacherIds = [];

const firstName = [
  'Nguyễn',
  'Trần',
  'Lê',
  'Phạm',
  'Phí',
  'Hồ',
  'Bùi',
  'Mai',
  'Đinh',
  'Ngô',
];
const middleName = [
  'Đình',
  'Nhật',
  'Văn',
  'Trúc',
  'Thị',
  'Quang',
  'Tiến',
  'Đức',
  'Hoàng',
  'Thúy',
];
const lastName = [
  'Thái',
  'Quang',
  'Minh',
  'Trọng Thành',
  'Tùng',
  'Vũ',
  'Tuyên',
  'Quần',
  'Sơn',
  'Ngọc',
];

const level = ['Thành viên', 'Bí thư', 'Lớp trưởng'];
const gender = ['Nam', 'Nữ'];

const gpas = [
  2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4,
  3.5, 3.6, 3.7, 3.8, 3.9, 4.0,
];

function rand(upper, lower = 0) {
  return Math.floor(Math.random() * (upper - lower)) + lower;
}

function genName() {
  const fNameIndex = rand(firstName.length);
  const mNameIndex = rand(middleName.length);
  const lNameIndex = rand(lastName.length);

  return `${firstName[fNameIndex]} ${middleName[mNameIndex]} ${lastName[lNameIndex]}`;
}

function genDateOfBirth() {
  let day = rand(31);
  while (day == 0) {
    day = rand(31);
  }
  let month = rand(13);
  while (month == 0) {
    month = rand(13);
  }
  return `2001-${month}-${day}`;
}

function genPhoneNumber() {
  return `0${rand(345678912, 987654321)}`;
}

function genEmail(username) {
  return `${username}@gmail.com`;
}

async function generateUsers(quantity, role) {
  console.log('Hi');
  const isTeacher = role == 'Teacher';
  let errorCheck = false;
  let username = isTeacher ? teacherUsername : studentUsername;

  while (quantity != 0 && !errorCheck) {
    const user = new User({
      username: username,
      password: username,
      role: role,
      level: isTeacher ? 'None' : level[0],
      name: genName(),
      dateOfBirth: genDateOfBirth(),
      gender: gender[rand(2)],
      phoneNumber: genPhoneNumber(),
      email: genEmail(username),
      gpa: isTeacher ? 0 : gpas[rand(gpas.length)],
      drl: isTeacher ? 0 : rand(100, 30),
    });
    isTeacher ? teacherIds.push(user.username) : studentIds.push(user.username);
    await user
      .save()
      .then(() => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        errorCheck = true;
      });
    username++;
    quantity--;
  }
  errorCheck
    ? console.log('Something went wrong')
    : console.log(`Imported ${role} data successfully`);
  return errorCheck;
}

generateUsers(studentQuantity, 'Student');
generateUsers(teacherQuantity, 'Teacher');
