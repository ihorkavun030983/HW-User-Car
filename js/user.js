class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  outInfo(){
    console.log(`Імя: ${this.name}, вік: ${this.age}`)
  }
}

class Car {
  _owner;
  constructor(brand, model, year, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }
  outInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік виписку: ${this.year}, Ціна: ${this.price}`);
    this.owner.outInfo();
  }
  set owner(user) {
    if (user.age < 18) 
    console.log(`${user.name} you so young!`);
    else this._owner = user;
}
}

const driver1 = new User('David', 33);
const driver2 = new User('Dan', 22);
const driver3 = new User('Ihor', 17);

const car1 = new Car('BMW', '740', 2005, '5000$');
const car2 = new Car('Volvo', 'XC90', 2015, '15000$');
const car3 = new Car('Jeep', 'Compass', 2017, '14000$');

car1.owner = driver1;
car2.owner = driver2;
car3.owner = driver3;

console.log('car1:', car1);
console.log('car2:', car2);
console.log('car3:', car3);