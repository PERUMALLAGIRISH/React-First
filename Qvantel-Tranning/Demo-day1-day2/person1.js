"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.displayPersonalDetails = function () {
        console.log(this.name + " and " + this.age);
    };
    return Person1;
}());
var Programmer1 = /** @class */ (function (_super) {
    __extends(Programmer1, _super);
    function Programmer1(name, age, language) {
        var _this = _super.call(this, name, age) || this;
        _this.language = language;
        return _this;
    }
    Programmer1.prototype.displayLanguage = function () {
        console.log("" + this.language);
    };
    return Programmer1;
}(Person1));
exports.Programmer1 = Programmer1;
