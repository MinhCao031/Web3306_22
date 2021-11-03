const User = require("../models/user");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/uet-smta-local", { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection openned!")
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    });

    const student01 = new User({
        username: 19021363,
        password: "Thai25879",
        role: "Student",
        level: "Thành viên",
        name: "Nguyễn Thái",
        dateOfBirth: "02/03/2001",
        gender: "Nam",
        phoneNumber: 0868466825,
        email: "thainguyen.uet@gmail.com",
        hometown: "Hà Nội",
        introduction: "A daily-updated person",
        fieldOfStudy: "Computer Science",
        gpa: 3.0
    })

    const student02 = new User({
        username: 19021364,
        password: "Thai25879",
        role: "Student",
        level: "Bí thư",
        name: "Nguyễn Quang",
        dateOfBirth: "02/03/2001",
        gender: "Nam",
        phoneNumber: 0868466825,
        email: "quangnguyen.uet@gmail.com",
        hometown: "Hải Hưng",
        introduction: "Hello it's Quang",
        fieldOfStudy: "Computer Science",
        gpa: 3.9
    })

    const student03 = new User({
        username: 19021365,
        password: "Thai25879",
        role: "Student",
        level: "Lớp trưởng",
        name: "Nguyễn Quỳnh",
        dateOfBirth: "02/03/2001",
        gender: "Nữ",
        phoneNumber: 0868466825,
        email: "quynhnguyen.uet@gmail.com",
        hometown: "Hải Dương",
        introduction: "Hmmmm",
        fieldOfStudy: "Information Technology",
        gpa: 3.95
    })

    const teacher01 = new User({
        username: 10012019,
        password: "Thai25879",
        role: "Teacher",
        level: "None",
        name: "Nguyễn Tú",
        dateOfBirth: "02/03/2001",
        gender: "Nữ",
        phoneNumber: 0868466825,
        email: "tunguyen.uet@gmail.com",
        hometown: "",
        introduction: "This is teacher 01",
        fieldOfStudy: "Computer Science",
        gpa: 0.0
    })

    const teacher02 = new User({
        username: 10022019,
        password: "Thai25879",
        role: "Teacher",
        level: "None",
        name: "Nguyễn Minh Quang",
        dateOfBirth: "02/03/2001",
        gender: "Nam",
        phoneNumber: 0868466825,
        email: "mquangnguyen.uet@gmail.com",
        hometown: "",
        introduction: "This is teacher 02",
        fieldOfStudy: "Computer Science",
        gpa: 0.0
    })

    student01.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
    
    student02.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }) 

    student03.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }) 

    teacher01.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }) 

    teacher02.save()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    }) 