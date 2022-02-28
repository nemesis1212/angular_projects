"use strict";
exports.__esModule = true;
var Signin = /** @class */ (function () {
    function Signin() {
    }
    Signin.prototype.USER = function () {
        var student = [
            {
                userid: "nemesis",
                pass: "12345"
            }, {
                userid: "ayush pratap",
                pass: "54321"
            }, {
                userid: "prateek",
                pass: "asdfjkl"
            }, {
                userid: "abhijeet",
                pass: "1234567"
            }
        ];
        var teacher = [
            {
                userid: "faizan sir",
                pass: "password"
            }
        ];
        for (var s = 0; s <= 3; s++) {
            console.log(student[s], " ");
        }
    };
    return Signin;
}());
exports["default"] = Signin;
//var obj=new Signin();
//obj.USER();
