// var arr = [2, 3, 4]

// for (let index of arr.keys()){
//     console.log(index)
// }

/* 
var greeting = "Hello world!";
var chars = [ ...greeting ];
console.log(chars);
 */
/* 
var arr = [ 10, 20, 30 ];

for (let [idx,val] of arr.entries()) {
    console.log(`[${ idx }]: ${ val }`);
}
 */

/* 
var chevy = {
    make : "chevy",
    model : "Bel Air",
    year : 1957,
    color : "red",
    passengers : 2,
    convertible : false,
    mileage : 1021
};
 
for (var prop in chevy){
    console.log(prop + ":" + chevy[prop])
}
 */

/* 
console.log("true" == true)
console.log(3 + "4")
console.log("4" + 3) */

/* function Duck(sound) {
    this.sound = sound;
    this.quack = function() {console.log(this.sound);}
   }
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck); */

// Destructing
var array = [1, 2, 3];

var [a, b, c] = array;
var [d, , e] = array;
// console.log(a, b, c); // 1, 2, 3
// console.log(d, e); // 1, 3
var [a, ...rest] = array;
// console.log(a, rest); // 1 and rest : [2, 3]

/* Do the same with object but parameters must be same as key */

// Rest parameters
// Get infinite input
function demo(...params) {
  // console.log(params);
}
demo(1, 2, 3, 4, 5); // [1,2,3,4,5]

// Spread operator --> Given array or object, just like we remove [ and ]

var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a3 = [...a1, ...a2]; // [1,2,3,4,5,6];
// --> same with object
function logger(a, b, c) {
  // console.log(a, b, c);
}
logger(...a1); // 1,2,3

let str = "We will, we will rock you";

// console.log( str.match(/we/i) );
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  totalCid = Math.round(totalCid * 100) / 100;

  if (totalCid < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === change) {
    return { status: "CLOSED", change: cid };
  }

  let changeArr = [];
  let currencyValues = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  for (let i = currencyValues.length - 1; i >= 0; i--) {
    let currencyName = currencyValues[i][0];
    let currencyValue = currencyValues[i][1];

    let cidValue = cid[i][1];

    if (change >= currencyValue && cidValue > 0) {
      let amountToReturn = Math.min(
        Math.floor(change / currencyValue) * currencyValue,
        cidValue
      );
      changeArr.push([currencyName, amountToReturn]);
      change -= amountToReturn;
      change = Math.round(change * 100) / 100;
    }

    if (change === 0) {
      break;
    }
  }

  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArr };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

function calculation(candy, people) {
  if (people == 0) {
    throw "Can't be divied by zero";
  } else if (candy % people == 0) {
    console.log("There are no extra candies");
  } else {
    console.log("There are extra candies");
  }
}

try {
  calculation(20, 5);
  calculation(15, 2);
  calculation(10, 0);
  calculation(20, 10);
} catch (err) {
  console.log(err);
}

console.log("----------------");

let menu = {
  pasta: 1000,
  steak: 1300,
  salad: 400,
  soup: 300,
};

let setMenu = ["salad", "steak"];
let payment = 0;

for (let order of setMenu) {
  console.log("Can I have " + order + " please?");
  for (let key in menu) {
    if (key == order) {
      payment = payment + menu[key];
    }
  }
}

console.log("The total is " + payment + " yen");
console.log("If you order 2 items together, they are a little cheaper");

console.log("----------------");

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  intro() {
    console.log(this.name + " is a " + this.type);
  }
}

let tama = new Animal();
// tama.constructor("Tama", "cat"); // wrong
tama.intro();

console.log("----------------");

class TrafficLight {
  setColor(color) {
    this.color = color;
  }
  info() {
    console.log("The light is " + this.color);
  }
}

function changeLight() {
  signal.setColor(lightPattern[count]);
  signal.info();

  if (signal.color == "green") {
    console.log("go");
    clearInterval(changeId);
  }
  count++;
}

let signal = new TrafficLight();
let lightPattern = ["yellow", "red", "green"];
let count = 0;
// setTimeout(() => {
//   console.log("kha");
// }, 3000);
// let changeId = setInterval(changeLight, 1000)

// var myVar = setTimeout(myTimer, 5000);

function myTimer() {
  console.log("Hello");
}

var createCounter = function (init) {
  let n = init
  return {
    increment() {
      init++
      return init 
    },
    reset(){
      init = n
      return init
    },
    decrement(){
      init--;
      return init
    }
  };
};


var compose = function(functions) {
	return function(x) {
        if (functions.length == 0) return x
        let res = functions[functions.length - 1](x);
        for (let i = functions.length - 2; i >= 0; i--){
            res = functions[i](res)
        }
        return res;
    }
};

const fn = compose([x => x + 1, x => 2 * x])
// console.log(typeof fn);
fn(4) // 9

const mainEle = document.getElementById('main')
const h1Ele = mainEle.querySelector('h1')
console.dir(mainEle)
console.log(mainEle)

const form = document.querySelector("form");
console.log(form.onsubmit.toString())
const textarea = document.querySelector("textarea");

// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));