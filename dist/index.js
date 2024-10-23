"use strict";
console.log("hello");
function greetuser(user) {
    console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}
function userdetails(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Address: ${user.address}`);
}
let user1 = { name: "navin", age: 15, address: "dfghjkafghjk" };
// greetuser(user1);
// userdetails(user1);
//function
function getUser(name, email, isPaid) {
    return `${name}:email:${email}:paid:${isPaid}`;
}
console.log(getUser("navin", "h@na.com", false));
let signUp = (name, email, isPaid = false) => { };
console.log(signUp("navin", "enial@dn.com"));
let heros = ["thor", "spiderman", "ironman"];
let names = heros.map((hero) => {
    return hero;
});
// console.log(names);
function consoleerror(errmsg) {
    console.log(errmsg);
}
//returning object
let obj = { name: "Navin", email: "h@h.com", IsActive: true };
function courseCost() {
    return { name: "navin", price: 5000 };
}
function officeUser(user) {
    return { name: "", email: "" };
}
let MYOfficeUser = {
    _id: "12345",
    name: "navin",
    email: "h@h.com",
    isActive: true,
};
//array
const arr = [];
arr.push("navin");
const arr1 = [];
const arr3 = [];
arr3.push({ name: "navin", isActive: true });
//Union
let name1;
let Navin = {
    name: "navin",
    id: 123,
};
function getuserCom(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    else {
        id + 2;
    }
}
//array
let data = [1, 2, 3, 4];
let data2 = ["1", "2", "3"];
let data3 = [1, 2, 3, 4]; //only string or only number
let data4 = ["1", 2, true];
let seatAllotment;
seatAllotment = "corner";
let navin2 = [1234, "hii"];
let dillibai = {
    dbId: 12,
    role: "admin",
    name: "dilli",
    email: "dbai@gmail.com",
    github: "navin127",
    isActive: true,
    googletoken: "1234567890",
    startTrail: () => {
        return "hello";
    },
    discount: (name, off) => {
        return 12;
    },
};
class User {
    constructor(email, name) {
        this.count = 1;
        this.city = "chennai";
        this.name = name;
        this.email = email;
    }
    // private count: number = 1;
    // readonly city: string = "chennai";
    // constructor(private email: string, public name: string) {
    // }
    get getemail() {
        return `Apple: ${this.email}`;
    }
    get getcount() {
        return this.count;
    }
    set setemail(newemail) {
        this.email = newemail;
    }
    set setcount(countnum) {
        if (this.count > 1) {
            throw new Error("Please enter more than 1");
        }
        this.count = countnum;
    }
}
const navin = new User("navi@.com", "navin");
console.log(navin.getcount);
console.log(navin.getemail);
console.log((navin.setemail = "na@mail"));
console.log((navin.setcount = 6));
class Instagram {
    constructor(camera, burst, video) {
        this.camera = camera;
        this.burst = burst;
        this.video = video;
    }
}
class Facebook {
    constructor(camera, burst, video) {
        this.camera = camera;
        this.burst = burst;
        this.video = video;
    }
    create() {
        console.log("Story Created...");
    }
}
const fb = new Facebook(12, "fgh", "hgh");
fb.create();
console.log(fb.camera);
function photoshop(data) {
    return data.count;
}
// console.log(photoshop(12));
//genric
function one(data) {
    return data;
}
console.log(one("str"));
function two(arr) {
    return arr[2];
}
// arrow function
let arrowfun = (arr) => {
    return arr[2];
};
function Three(one, two) {
    return { one, two };
}
console.log(Three(12, { username: "navin", password: 12345, connection: "good" }));
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
function printall(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
printall("null");
function isAdminAccount(account) {
    if ("IsAdmin" in account) {
        return account.IsAdmin;
    }
    return false;
}
const user = { name: "Alice", email: "alice@example.com" };
const admin = { name: "Bob", email: "bob@example.com", IsAdmin: true };
console.log(isAdminAccount(user));
console.log(isAdminAccount(admin));
//instance of
let date = new Date();
logvalue(date);
function logvalue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function pet(pet) {
    return pet.swim !== undefined;
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side*shape.side;
}
//-----exhaust
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.length * shape.width;
        case "square":
            return shape.side * shape.side;
        default:
            const defaultshape = shape;
            return defaultshape;
    }
}
