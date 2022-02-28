"use strict";
exports.__esModule = true;
exports.Login = void 0;
var ps = require("prompt-sync");
var prompt = ps();
var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.USER = function () {
        var student = new Array();
        var teacher = new Array();
        var n = Number(prompt("Enter the number of students:"));
        var nt = Number(prompt("Enter the number of teachers:"));
        console.log("Enter the values for students: ");
        for (var s = 0; s < n; s++) {
            student[s] =
                {
                    userid: prompt("entre your username: "),
                    pass: prompt("enter password: ")
                };
        }
        console.log("Enter the values for teachers: ");
        for (var t = 0; t < nt; t++) {
            teacher[t] =
                {
                    userid: prompt("entre your username: "),
                    pass: prompt("enter password: ")
                };
        }
        console.log("Information for students:");
        for (var s = 0; s < n; s++) {
            console.log(student[s], "   ");
        }
        console.log("Information for teachers:");
        for (var t = 0; t < nt; t++) {
            console.log(teacher[t], "   ");
        }
    };
    return Login;
}());
exports.Login = Login;
var obj = new Login();
obj.USER();
