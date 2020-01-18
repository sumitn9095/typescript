import { Vehicle } from "./Vehicle";

class Car extends Vehicle {
    constructor(public name: string, protected mileage: number, protected fuel: number) {
        super(name, mileage, fuel);
    }
    
}



let myCar = new Car('merc', 45, 100);

console.log(myCar.name);
myCar.start();
myCar.run(1.3);

//myCar.startMusic();