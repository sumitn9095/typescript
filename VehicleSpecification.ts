export abstract class VehicleSpecification {
    protected mileage: number;
    protected fuel:number;
    protected isMoving:boolean;
    protected startEngine: boolean;
    protected stopEngine: boolean;
    protected isEngineStarted: boolean;
    abstract startVehicle (): string;
    protected processRun(km: number, mileage: number, isEngineStarted: boolean): number {
        //let isEngineStarted = this.start();
        //console.log(this.isEngineStarted);
        if(this.isEngineStarted) {
            var fuelRemaining:number = km*((this.mileage*40.4)/100);
            console.log(` ${fuelRemaining} `);
        } else {
            console.log(`Start your Vehichle first`);
        }
        console.log(`Processing vehicle run ${km}`);
        return fuelRemaining;
    }
}