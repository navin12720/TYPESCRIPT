console.log("hello");
//Interface
interface User {
  name: string;
  age?: number;
  address?: string;
}

function greetuser(user: User) {
  console.log(`Hello, ${user.name}! You are ${user.age} years old.`);
}
function userdetails(user: User) {
  console.log(`Name: ${user.name}, Age: ${user.age}, Address: ${user.address}`);
}
let user1 = { name: "navin", age: 15, address: "dfghjkafghjk" };
// greetuser(user1);
// userdetails(user1);
//function
function getUser(name: string, email: string, isPaid: boolean) {
  return `${name}:email:${email}:paid:${isPaid}`;
}
console.log(getUser("navin", "h@na.com", false));

let signUp = (name: string, email: string, isPaid: boolean = false) => {};
console.log(signUp("navin", "enial@dn.com"));

let heros = ["thor", "spiderman", "ironman"];
let names = heros.map((hero): string => {
  return hero;
});
// console.log(names);
function consoleerror(errmsg: string): void {
  console.log(errmsg);
}
//returning object
let obj = { name: "Navin", email: "h@h.com", IsActive: true };

function courseCost(): { name: string; price: number } {
  return { name: "navin", price: 5000 };
}

//type

type MyUser = {
  name: string;
  email: string;
  age?: number;
};
function officeUser(user: MyUser): MyUser {
  return { name: "", email: "" };
}
type UserOff = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  CreditcardNumber?: number;
};
let MYOfficeUser: UserOff = {
  _id: "12345",
  name: "navin",
  email: "h@h.com",
  isActive: true,
};
//array
const arr: string[] = [];
arr.push("navin");
const arr1: Array<number> = [];
type arrUser = {
  name: string;
  isActive: boolean;
};
const arr3: arrUser[] = [];
arr3.push({ name: "navin", isActive: true });

//Union
let name1: string | number;

type usercom = {
  name: string;
  id: number;
};
type Admin = {
  Username: string;
  id: number;
};
let Navin: usercom | Admin = {
  name: "navin",
  id: 123,
};
function getuserCom(id: number | string) {
  if (typeof id === "string") {
    id.toUpperCase();
  } else {
    id + 2;
  }
}
//array
let data: number[] = [1, 2, 3, 4];
let data2: string[] = ["1", "2", "3"];
let data3: string[] | number[] = [1, 2, 3, 4]; //only string or only number
let data4: (string | number | boolean)[] = ["1", 2, true];

let seatAllotment: "corner" | "middle" | "window";
seatAllotment = "corner";

//tuples
type Data = [number, string];
let navin2: Data = [1234, "hii"];

//interface
interface dbai {
  readonly dbId: number;
  name: string;
  email: string;
  isActive: boolean;
  googletoken?: string;
  startTrail(): string;
  discount(couponName: string, offer: number): number;
}

interface dbai {
  github: string;
}
interface AdminDbai extends dbai {
  role: "admin" | "Teamleader" | "Teamadmin";
}

let dillibai: AdminDbai = {
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
  discount: (name: "navi12", off: 56) => {
    return 12;
  },
};

class User {
  private count: number = 1;
  name: string;
  private email: string;
  readonly city: string = "chennai";
  constructor(email: string, name: string) {
    this.name = name;
    this.email = email;
  }

  // private count: number = 1;
  // readonly city: string = "chennai";
  // constructor(private email: string, public name: string) {
  // }

  get getemail(): string {
    return `Apple: ${this.email}`;
  }
  get getcount(): number {
    return this.count;
  }
  set setemail(newemail: string) {
    this.email = newemail;
  }
  set setcount(countnum: number) {
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

// interface
interface TAkePhoto {
  video: string;
  camera: number;
  burst: string;
}
interface Story {
  create(): void;
}

class Instagram implements TAkePhoto {
  constructor(
    public camera: number,
    public burst: string,
    public video: string
  ) {}
}
class Facebook implements TAkePhoto, Story {
  constructor(
    public camera: number,
    public burst: string,
    public video: string
  ) {}
  create(): void {
    console.log("Story Created...");
  }
}
const fb = new Facebook(12, "fgh", "hgh");
fb.create();
console.log(fb.camera);

//Type
type album = {
  name: string;
  size: number;
};
type photo = {
  photosize: number;
  count: number;
};
type pic = album & photo & { gender: string };

function photoshop(data: pic) {
  return data.count;
}
// console.log(photoshop(12));

//genric

function one<T>(data: T): T {
  return data;
}
console.log(one("str"));

function two<T>(arr: T[]): T {
  return arr[2];
}
// arrow function
let arrowfun = <T>(arr: T[]): T => {
  return arr[2];
};

interface DataBase {
  username: string;
  password: number | string;
  connection: "good" | "medium" | "low";
}
function Three<T, U extends DataBase>(one: T, two: U): object {
  return { one, two };
}
console.log(
  Three(12, { username: "navin", password: 12345, connection: "good" })
);

// genric class
interface exam {
  name: string;
  type: string;
}
interface course {
  name: string;
  author: string;
  subject: string;
  subjectcode: number;
}
class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}

function printall(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
printall("null");

//narrowing
// in operator  narrowing

interface user1 {
  name: string;
  email: string;
}
interface Admin1 {
  name: string;
  email: string;
  IsAdmin: boolean;
}
function isAdminAccount(account: user1 | Admin1) {
  if ("IsAdmin" in account) {
    return account.IsAdmin;
  }
  return false;
}
const user: user1 = { name: "Alice", email: "alice@example.com" };
const admin: Admin1 = { name: "Bob", email: "bob@example.com", IsAdmin: true };

console.log(isAdminAccount(user));
console.log(isAdminAccount(admin));

//instance of
let date = new Date();
logvalue(date);
function logvalue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

// type predicates
type fish = { swim: () => {} };
type bird = { fly: () => {} };
function pet(pet: fish | bird): pet is fish {
  return (pet as fish).swim !== undefined;
}

//exhaustivenss checking with never

interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}
type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // return shape.side*shape.side;
}

//-----exhaust
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.length * shape.width;
    case "square":
      return shape.side * shape.side;
    default:
      const defaultshape: never = shape;
      return defaultshape;
  }
}
