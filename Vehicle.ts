import * as ifs from "./interface";
import { audioData } from "./audio.data";
import { VehicleSpecification } from "./VehicleSpecification";
import { Tire } from "./Tire";

export class Vehicle extends VehicleSpecification {
    //public soundSystem: ifs.Iaudible;
    public soundSystem : ifs.Iaudible = {
        isPlaying: false,
        turnOn() {
            this.isPlaying = true;
            console.log('music playing');
        },
        playSelection(P : number) {
            let getAllAudioData = audioData();
            if(this.isPlaying) {
                let playingSong: any[] = [];
                for (let audioSongs of getAllAudioData) {
                    //console.log(audio         Songs.name);
                    if(P == audioSongs.id) {
                        playingSong.push(audioSongs.id, audioSongs.name, audioSongs.genre);
                        console.log(`Track ${P}, which is ${audioSongs.name} song is playing. Genre ${audioSongs.genre}`);
                        //console.log(`Track ${P}, which is ${audioSongs.name} song is playing. Genre ${audioSongs.genre[audioSongs.genre]}`);
                    }
                }
                console.log(playingSong);
            } else {
                console.log('start your soundsystem first');
            }
        },
        turnOff() {
            this.isPlaying = false;
            console.log('music has stopped');
        },
    }

    public vehicleProps : ifs.Ivehicle = {
        name: "",
        color: "",
        allWheelDrive: false,
        soundSystem: this.soundSystem 
    }

    static milesTravelled = 0;

    constructor(name: string, mileage: number, fuel:number) {
        super();
        this.vehicleProps.name = name;
        this.mileage =  mileage;
        this.fuel = fuel;
        this.startEngine = false;
        console.log(this.vehicleProps.name);
    }
    startVehicle():string {
        console.log('dc');
        return;
    }
    start():boolean {
        this.isEngineStarted = this.startEngine = true;
        return this.isEngineStarted;
    }
    startMusic(){
        this.vehicleProps.soundSystem.turnOn();
        this.vehicleProps.soundSystem.isPlaying = true;
        this.vehicleProps.soundSystem.playSelection(3);
    }
    public run(km: number): number {
        this.isEngineStarted = this.start();
        let fuelRemaining: number;
        //console.log(this.isEngineStarted);
        // if(this.isEngineStarted) {
        //     var fuelRemaining:number = km*(this.mileage/100);
        //     console.log(` ${fuelRemaining} `);
        // } else {
        //     console.log(`Start your ${this.vehicleProps.name} first`);
        // }

        super.processRun(km, this.mileage, this.isEngineStarted);
        
        return fuelRemaining;
    }

    public chooseTires(tirename: Number): Object {
        new Tire(2);
        return tirename;
    }
}


// let myVehicle = new Vehicle('myVehicle', 45, 100);

// //console.log(myVehicle.name);
// // myVehicle.start();
// // myVehicle.run(1.3);

// //myVehicle.startMusic();