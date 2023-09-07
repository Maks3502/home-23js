
// завдання 1

// class Account  {
//   constructor(email, login){
//     this.email = email;
//     this.login = login;
//   }

//     getInfo() {
//         console.log(`Login : ${this.login}, email : ${this.email}`);
//     }

// }




// console.log(Account.prototype.getInfo); // function
// const mango = new Account({
// login: 'Mangozedog',
// email: 'mango@dog.woof',
// });
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// const poly = new Account({
// login: 'Poly',
// email: 'poly@mail.com',
// });
// poly.getInfo(); // Login: Poly, Email: poly@mail.com



// // завдання 2
// class User {
//     constructor(name, age, followers){
// this.name = name;
// this.age = age;
// this.followers = followers
//     }

//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//     });
//     mango.getInfo(); // User Mango is 2 years old and has 20 followers
//     const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//     });
//     poly.getInfo(); // User Poly is 3 years old and has 17 followers


// завдання 3
// class Storage {
//     constructor(animal){
// this.animal = animal
//     }

//     getItems(){
//         return this.items
//     }

//     addItem(item){
//         this.item.push(item)
//     }

//     removeItem(item) {
//         for (let i = 0; i < this.items.length; i++) {
           
//             if (this.items[i] === item) {

//                this.items.splice(i, 1);

//                break; 
//            }
//        }
//    }
// }

// const storage = new Storage([
//     'Нанітоіди',
//     'Пролонгер',
//     'Залізні жупи',
//     'Антигравітатор',
//     ]);
//     const items = storage.getItems();
//     console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
//     storage.addItem('Дроїд');
//     console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//     storage.removeItem('Пролонгер');
//     console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]




    // завдання 4

//     class StringBuilder {
//         constructor(string){
//             this.value = string;
//         }
//         get valueP() {
//             return this.value;
//           }
        
//           append(str) {
//             this.value += str;
//           }
        
//           prepend(str) {
//             this.value = str + this.value;
//           }
        
//           pad(str) {
//             this.value = str + this.value + str;
//           }
//     }


//     const builder = new StringBuilder('.');
// builder.append('^');
// console.log(builder.value); // '.^'
// builder.prepend('^');
// console.log(builder.value); // '^.^'
// builder.pad('=');
// console.log(builder.value); // '=^.^='



// завдання 5

class Car {

 
    constructor() {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;

    }

    getprice(Car){
        return this._price
    }

    setprice(newPrice) {
        this._price = newPrice;
      }
 
    turnOn() {
        this.isOn = true
    }
 
    turnOff() {
        this.isOn = false
    }
 
    accelerate(value) {
        if(this.speed + value < this.maxSpeed){
            this.spred += value
        }
    }
  
    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
          }
    }
 
    drive(hours) {
        if (this.isOn) {
            this.distance += this.speed * hours;
          }
        }
    }
    
    const mustang = new Car({ maxSpeed: 200, price: 2000 });
    mustang.turnOn();
    mustang.accelerate(50);
    mustang.drive(2);
    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
    mustang.decelerate(20);
    mustang.drive(1);
    mustang.turnOff();
    Car.getSpecs(mustang);
    // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
    console.log(mustang.price); // 2000
    mustang.price = 4000;
    console.log(mustang.price); // 4000
    // Posted Sat 26 Aug 2023 at 11:13 am