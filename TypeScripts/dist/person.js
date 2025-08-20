"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getGrade() {
        return this.grade;
    }
    getDetails() {
        super.getDetails();
        console.log(`Grade: ${this.grade}`);
    }
}
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance is ${this.balance}`);
        }
    }
}
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getInfo() {
        console.log(`Product Name: ${this.name}, Price: ${this.price}`);
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound(sound) {
        console.log(`${this.name} says ${sound}`);
    }
}
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}
// const Circle1 = new Circle(5);
// const Square1 = new Square(4);
// console.log(`Area of Square: ${Square1.getArea()}`);
// console.log(`Area of Circle: ${Circle1.getArea()}`);
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }
    addUser(user) {
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
function Box(value) {
    return value;
}
const numberBox = Box(42);
const stringBox = Box("Hello, TypeScript!");
const booleanBox = Box(true);
const personBox = Box(new Person("John", 30));
console.log(numberBox);
console.log(stringBox);
console.log(booleanBox);
console.log(personBox.getName());
