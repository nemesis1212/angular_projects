"use strict";
exports.__esModule = true;
var module1_1 = require("./module1");
var module_1 = require("./module");
var Teacher = new module_1["default"]();
console.log(Teacher.USER());
var Student = new module1_1["default"]();
console.log(Student.USER());
