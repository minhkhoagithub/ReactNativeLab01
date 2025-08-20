class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public getName(): string {
        return this.name;   
    }
    public getAge(): number {
        return this.age;   
    }

    public getDetails(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


class Student extends Person {
    grade: number;
    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
    public getGrade(): number {
        return this.grade
    }

    public getDetails(): void {
        super.getDetails();
        console.log(`Grade: ${this.grade}`);
    }
}

class Car {
    brand: string;
    model: string;
    year: number;
    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    public getInfo(): void {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getInfo(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
      public getBalance(): number {
        return this.balance;
    }
    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }
    public withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    }
}

class Book {
    title: string;
    author: string;
    year: number;
    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    public getInfo(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}


 class Product{
    name: string;
    price: number;
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    public getInfo(): void {
        console.log(`Product Name: ${this.name}, Price: ${this.price}`);    
    }
 }

// const person = new Person("John Doe", 30);
// const student = new Student("Jane Doe", 20, 9);
// const car = new Car("Toyota", "Corolla", 2020);
// car.getInfo();

// const rectangle = new Rectangle(10, 5);
// rectangle.getInfo();
// console.log(`Area: ${rectangle.getArea()}`);
// console.log(`Perimeter: ${rectangle.getPerimeter()}`);


// const bankAccount = new BankAccount(1000);
// bankAccount.getBalance();
// bankAccount.deposit(500);
// bankAccount.withdraw(200);
// bankAccount.withdraw(1500); 

// const book  = new Book("1984", "George Orwell", 1949);
// book.getInfo();

// var arr = []
// for (let i = 0; i<10; i++){
//     arr.push(new Product(`Product ${i}`, Math.floor(Math.random()*500)));
// }
// console.log("All Products have  price more than 100");
// arr.filter((product) => product.price > 100).forEach((product) => {
//     product.getInfo();
// }
// );

interface Animal{
    name: string;
    sound(sound: string): void;
}


 class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(sound: string): void {
        console.log(`${this.name} says ${sound}`);
    }
}



abstract class Shape {
    abstract getArea(): number;
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    side: number;
    constructor(side: number) {
        super();
        this.side = side;
    }       
    getArea(): number {
        return this.side * this.side;
    }
}

// const Circle1 = new Circle(5);
// const Square1 = new Square(4);
// console.log(`Area of Square: ${Square1.getArea()}`);
// console.log(`Area of Circle: ${Circle1.getArea()}`);



class Library {
    books: Book[];
    users: Person[];
    constructor() {
        this.books = [];
        this.users = [];
    }
    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }
    public addUser(user: Person): void {
        this.users.push(user);
        console.log(`Added user: ${user.getName()}`);
    }
}

// const library = new Library();
// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// const book2 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// const user1 = new Person("Alice", 25);
// const user2 = new Person("Bob", 30);
// library.addBook(book1);
// library.addBook(book2);
// library.addUser(user1);
// library.addUser(user2);
// console.log("Library books:");
// library.books.forEach(book => book.getInfo());
// console.log("Library users:");
// library.users.forEach(user => user.getDetails());


function Box<T>(value: T): T {
    return value;
}

const numberBox = Box<number>(42);
const stringBox = Box<string>("Hello, TypeScript!");
const booleanBox = Box<boolean>(true);
const personBox = Box<Person>(new Person("John", 30));
console.log(numberBox);
console.log(stringBox);
console.log(booleanBox);        
console.log(personBox.getName());
