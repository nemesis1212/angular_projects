var genericClass = /** @class */ (function () {
    function genericClass(id, technology) {
        this.userid = id;
        this.tech = technology;
    }
    genericClass.prototype.showinfo = function () {
        console.log("Userid:".concat(this.userid, ",talk on technology:").concat(this.tech));
    };
    return genericClass;
}());
var obj = new genericClass(111, "asp.net");
console.log(obj.showinfo());
