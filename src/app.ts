// Static type checker

let b: number;
// b = "s"  -> Error

// Type inference
let a = 5;
// a = "5" -> Error

// Union types
let c: number | string;
c = 4;
c = "4";
// c = true -> Error

// Literal type
let d: "gauche" | "droite";
// d = "haut" -> Error

// Type assertion
const btn = <HTMLButtonElement>document.querySelector(".btn");
// Liste des interfaces: https://developer.mozilla.org/fr/docs/Web/API

// Array
let myArray: number[];
myArray = [1, 2, 3];

// Tuples
let complexeArray: [number, string, true];
complexeArray = [2, "ok", true];

let multiArray: (number | string)[];
multiArray = [4, 5, "Jhon", 7];

// Object
let myObject: { a: number; b: any };

myObject = {
  a: 5,
  b: "5",
};

// Any || Unknown
let myAny: any;
myAny.trim();

let myUnknown: unknown;
// myUnknown.trim() -> Error

// Interface
interface User {
  readonly name: string;
  age: number;
  employed?: boolean;
}

let john: User = {
  name: "John",
  age: 30,
};

// john.name = "Bob" -> Error

interface UserVip extends User {
  isVip: true;
}

let bob: UserVip = {
  name: "Bob",
  age: 40,
  isVip: true,
};

// Type Aliases
type myBoolean = true | false;
type stringOrNum = string | number;

let x: stringOrNum;
x = "4";
x = 4;

// Generics
interface Box<Type> {
  a: Type;
}

let myBox: Box<number> = {
  a: 5,
  // a: "5", -> Error
};

// Function
function add(a: number, b: number): void {
  console.log(a + b);
}

function echo<T>(x: T): T {
  return x;
}
echo(5);

// Classe
class UserAccount {
  constructor(private name: string, private id: number) {}
}

const newUser = new UserAccount("Bob", 1);
