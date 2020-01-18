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
var Vehicle_1 = require("./Vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, mileage, fuel) {
        var _this = _super.call(this, name, mileage, fuel) || this;
        _this.name = name;
        _this.mileage = mileage;
        _this.fuel = fuel;
        return _this;
    }
    return Car;
}(Vehicle_1.Vehicle));
var myCar = new Car('merc', 45, 100);
console.log(myCar.name);
myCar.start();
myCar.run(1.3);
//myCar.startMusic();
