"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld(name) {
        this.name = name;
    }
    HelloWorld.prototype.greet = function () {
        return this.name;
    };
    HelloWorld.prototype.sayHello = function () {
        return "Hello ".concat(this.name);
    };
    return HelloWorld;
}());
exports.default = HelloWorld;
