let iString = "Hi,I'm string";
let k = 505;
let h = 32.5;
let exit = true;
let iUndefined;
let iknow = null;
let cObj ={};

let prim1 = k + 110;
let prim2 = prim1 + 50.5;
let prim3 = prim2 + "35";

typeof  prim1 
typeof prim3 

let iArray = new Array();
console.log(typeof iArray);
let iArrayToo = [];
console.log(typeof iArrayToo);

let Mass = [ 5, 6, 10, "six", "five", "ten"];

Mass
Mass [4]
Mass[2]
Mass[7]
Mass[5] = 10;
Mass

let Matr = [[1, 15,20],[25,41,12]];
Matr
Matr[1][1]

let students = [
        ["Ksenia", 21, false],
        ["Danya",15,false],
        ["Anna",22,true],
];
students

let people = new Object();

let people = {};

let people = {
    name: "Anna",
    lastname: "Mever",
    age: 15
};
 people 

 let people ={
    name:"Kate",
    lastanme: "Moskl",
    age:25,
    interests :["Sport","drawing"],
    skills: ["Web","C++"],
    pet :{
        name:"Lord",
        type :"Dogs",
        color:"White",
    },
 };
  let Dog ={
    name:"Mik",
    color: "black",
  };
  Dog.voice = function() {
    console.log("GAV");
  };
  
  Dog.voice()

  let people ={
    name:"Ksenia",
    lastname: "Roenko",
    whoami: function() {
        console.log("My name is "+ this.name +" " + this.lastname);
    }
  };

  let User = {
    name:"Ksenia",
  }
  let Speciality = {
    type:"Student",
  }
Object.assign(User,Speciality);
  