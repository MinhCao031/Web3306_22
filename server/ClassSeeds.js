const config = require('./config/config');
const Class = require('./models/Class');

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

var studentUsername = 19021300;
var teacherUsername = 20191000;

const studentQuantity = 270;
const teacherQuantity = 3;
const classQuantity = teacherQuantity * 3;

const studentIds = [];
const teacherIds = [];

const firstClassName = [ 'K64', 'K63', 'K65' ];
const middleClassName = [ 'CA', 'CE', 'CT', 'CH' ];
const lastCLCClassName = [ 'CLC1', 'CLC2', 'CLC3' ];
const lastTClassName = [ 'T1', 'T2', 'T3' ];

const classType = [ 'Thường', 'CLC' ];

function rand(upper, lower = 0) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

function genClassName(classType) {
    const isTypeOne = classType == classType[1];

    const fClassName = firstClassName[rand(firstClassName.length)];
    const mClassName = middleClassName[rand(middleClassName.length)];
    const lClassName = isTypeOne ? lastCLCClassName[rand(3)] : lastTClassName[rand(3)];

    return `${fClassName}-${mClassName}${lClassName}`;
}

function fillStudentIds(quantity) {
    while (quantity != 0) {
        studentIds.push(studentUsername);
        studentUsername++;
        quantity--;
    }
}

function fillTeacherIds(quantity) {
    while (quantity != 0) {
        teacherIds.push(teacherUsername);
        teacherUsername++;
        quantity--;
    }
}

async function generateClasses(quantity) {
    let errorCheck = false;
    let classId = 0;
    let teacherIdCount = 0;
    let startStudentId = 0;
    let endStudentId = parseInt(studentQuantity / classQuantity);

    while (quantity != 0 && !errorCheck) {
        let type = classType[rand(classType.length)];
        studentIdRange = studentIds.slice(startStudentId, endStudentId);
        const newClass = new Class({
            classId: classId,
            className: genClassName(type),
            classType: type,
            teacherId: teacherIds[teacherIdCount],
            studentIds: studentIdRange,
            leaderId: studentIdRange[rand(studentIdRange.length)]
        });
        await newClass
            .save()
            .then(() => {
                console.log(newClass);
            })
            .catch((err) => {
                errorCheck = true;
                console.log(err);
            });
        startStudentId = endStudentId;
        endStudentId += parseInt(studentQuantity / classQuantity);
        classId++;
        quantity--;
        teacherIdCount = classId % 3;
    }

    errorCheck ? console.log('Something went wrong') : console.log('Imported classes data successfully!');
}

fillStudentIds(studentQuantity);
fillTeacherIds(teacherQuantity);
generateClasses(classQuantity);
