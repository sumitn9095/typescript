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
var audio_data_1 = require("./audio.data");
var VehicleSpecification_1 = require("./VehicleSpecification");
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(name, mileage, fuel) {
        var _this = _super.call(this) || this;
        //public soundSystem: ifs.Iaudible;
        _this.soundSystem = {
            isPlaying: false,
            turnOn: function () {
                this.isPlaying = true;
                console.log('music playing');
            },
            playSelection: function (P) {
                var getAllAudioData = audio_data_1.audioData();
                if (this.isPlaying) {
                    var playingSong = [];
                    for (var _i = 0, getAllAudioData_1 = getAllAudioData; _i < getAllAudioData_1.length; _i++) {
                        var audioSongs = getAllAudioData_1[_i];
                        //console.log(audio         Songs.name);
                        if (P == audioSongs.id) {
                            playingSong.push(audioSongs.id, audioSongs.name, audioSongs.genre);
                            console.log("Track " + P + ", which is " + audioSongs.name + " song is playing. Genre " + audioSongs.genre);
                            //console.log(`Track ${P}, which is ${audioSongs.name} song is playing. Genre ${audioSongs.genre[audioSongs.genre]}`);
                        }
                    }
                    console.log(playingSong);
                }
                else {
                    console.log('start your soundsystem first');
                }
            },
            turnOff: function () {
                this.isPlaying = false;
                console.log('music has stopped');
            }
        };
        _this.vehicleProps = {
            name: "",
            color: "",
            allWheelDrive: false,
            soundSystem: _this.soundSystem
        };
        _this.vehicleProps.name = name;
        _this.mileage = mileage;
        _this.fuel = fuel;
        _this.startEngine = false;
        console.log(_this.vehicleProps.name);
        return _this;
    }
    Vehicle.prototype.startVehicle = function () {
        console.log('dc');
        return;
    };
    Vehicle.prototype.start = function () {
        this.isEngineStarted = this.startEngine = true;
        return this.isEngineStarted;
    };
    Vehicle.prototype.startMusic = function () {
        this.vehicleProps.soundSystem.turnOn();
        this.vehicleProps.soundSystem.isPlaying = true;
        this.vehicleProps.soundSystem.playSelection(3);
    };
    Vehicle.prototype.run = function (km) {
        this.isEngineStarted = this.start();
        var fuelRemaining;
        //console.log(this.isEngineStarted);
        // if(this.isEngineStarted) {
        //     var fuelRemaining:number = km*(this.mileage/100);
        //     console.log(` ${fuelRemaining} `);
        // } else {
        //     console.log(`Start your ${this.vehicleProps.name} first`);
        // }
        _super.prototype.processRun.call(this, km, this.mileage, this.isEngineStarted);
        return fuelRemaining;
    };
    Vehicle.milesTravelled = 0;
    return Vehicle;
}(VehicleSpecification_1.VehicleSpecification));
exports.Vehicle = Vehicle;
// let myVehicle = new Vehicle('myVehicle', 45, 100);
// //console.log(myVehicle.name);
// // myVehicle.start();
// // myVehicle.run(1.3);
// //myVehicle.startMusic();
