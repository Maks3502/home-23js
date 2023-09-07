
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



    const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='