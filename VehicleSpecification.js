"use strict";
exports.__esModule = true;
var VehicleSpecification = /** @class */ (function () {
    function VehicleSpecification() {
    }
    VehicleSpecification.prototype.processRun = function (km, mileage, isEngineStarted) {
        //let isEngineStarted = this.start();
        //console.log(this.isEngineStarted);
        if (this.isEngineStarted) {
            var fuelRemaining = km * ((this.mileage * 40.4) / 100);
            console.log(" " + fuelRemaining + " ");
        }
        else {
            console.log("Start your Vehichle first");
        }
        console.log("Processing vehicle run " + km);
        return fuelRemaining;
    };
    return VehicleSpecification;
}());
exports.VehicleSpecification = VehicleSpecification;
