const User = require("./models/user");
const Class = require("./models/class");
const ScoreTable = require("./models/score-table");

const mongoose = require("mongoose");

function printErrLogs(err) {
    console.log(err);
}

function printConfirmation(data, msg="Succeed") {
    console.log(msg);
    console.log(data);
}

mongoose.connect("mongodb://localhost:27017/uet-stma-test-04", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => printConfirmation("Openned!"))
    .catch(err => printErrLogs(err));

    const testUser1 = new User({
        username: 19021363,
        password: "Thai25879",
        role: "student",
        name: "Nguyen Minh Thai",
        dateOfBirth: "02-03-2001",
        email: "19021363@vnu.edu.vn"
    })

    const testUser2 = new User({
        username: 19021364,
        password: "dfai25879",
        role: "student",
        name: "Nguyen Tran Manh Long",
        dateOfBirth: "12-31-2001",
        email: "19021364@vnu.edu.vn"
    })

    testUser1.save()
    .then(data => printConfirmation(data))
    .catch(err => printErrLogs(err)); 

    testUser2.save()
    .then(data => printConfirmation(data))
    .catch(err => printErrLogs(err)); 

    const testClass1 = new Class({
        classId: 0001,
        name: "Class 0001",
        userIds: [
            19021363,
            19021364,
            19021365
        ]
    })

    const testClass2 = new Class({
        classId: 0002,
        name: "Class 0002",
        userIds: [
            19021366,
            19021367,
            19021368
        ]
    })

    testClass1.save()
    .then(data => printConfirmation(data))
    .catch(err => printErrLogs(err)); 

    testClass2.save()
    .then(data => printConfirmation(data))
    .catch(err => printErrLogs(err)); 