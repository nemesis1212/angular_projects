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
            }, {
                userid: "anurag sir",
                pass: "qwerty"
            }, {
                userid: "priya ma'am",
                pass: "qwerty"
            }
        ];
        for (var t = 0, s = 0; t <= 2 || s <= 3; t++, s++) {
            console.log("Teacher->", teacher[t], "        student->", student[s], " ");
        }
    };
    return Signin;
}());
var obj = new Signin();
obj.USER();
