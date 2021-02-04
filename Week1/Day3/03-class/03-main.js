import Car, {Taxi} from './02-car.js';
import {listCar} from './04-apiCar.js';

function main() {
    const hrv  = new Car("Honda",2020);
    console.log(hrv);
    const grab = new Taxi("Hinda","2019","Grab");
   
    console.log(grab);
    console.log(grab.totalRevenue(4000.00,2));

    const gojek = new Taxi("VA","2019","Gojek");
    // console.log(gojek);
    // console.log(gojek.sayHi("gojek"));

    const bird = new Taxi("Blue Bird");
    
    
    console.log(`Total Car : ${Car.totalCar}`);

    const cars = listCar(hrv,grab,gojek,grab);
    console.log(cars);
    
}

main();