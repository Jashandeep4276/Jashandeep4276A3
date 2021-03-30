
import { cars } from '../app/carInfo';

let carsObj : cars[] = [];
let car1 = new cars('BMW','2020', 'BMW IX3', 'Black', 'assets/images/bmw-ix3_4676_1.jpg');
let car2 = new cars('Audi','2020', 'Audi E-tron Sportback', 'Silver', 'assets/images/audi-e-tron-sportback_4621_1.jpg');
let car3 = new cars('Ferrari','2021', 'Ferrari F8 Spider', 'Yellow', 'assets/images/ferrari-f8-spyder-112-1593551723.jpg');
let car4 = new cars('Abarth','2018', 'Abarth 124 Spider', 'White', 'assets/images/abarth-124-spider-cornering.jpg');


carsObj.push(car1);
carsObj.push(car2);
carsObj.push(car3);
carsObj.push(car4);

export function getCars()
{
    return carsObj;
}

