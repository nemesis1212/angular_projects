"use strict";
exports.__esModule = true;
var Signin = /** @class */ (function () {
    function Signin() {
    }
    Signin.prototype.USER = function () {
        var teacher = [
            {
                userid: "faizan sir",
                pass: "password"
            }, {
                userid: "anurag sir",
                pass: "qwerty"
            }, {
                userid: "priya ma'am",
                pass: "qwerty"
            }
        ];
        for (var t = 0, s = 0; t <= 2 || s <= 3; t++, s++) {
            console.log("Teacher->", teacher[t], " ");
        }
    };
    return Signin;
}());
exports["default"] = Signin;
//  var obj=new Signin();
// obj.USER();
