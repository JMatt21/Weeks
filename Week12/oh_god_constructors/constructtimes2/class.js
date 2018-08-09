let Student = require("./student");

let Class = function (professer, roomNumber) {
    this.students = [];
    this.professer = professer;
    this.roomNumber = roomNumber;
}
Class.prototype.addStudent = function(name, favSubject, gpa) {
    this.students.push(new Student(name, favSubject, gpa));
}

module.exports = Class;
