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
var array = [1, 2, 3]

var [a, b, c] = array;
var [d, , e] = array;
console.log(a, b, c); // 1, 2, 3
console.log(d, e); // 1, 3
var [a, ...rest] =array;
console.log(a, rest); // 1 and rest : [2, 3]

/* Do the same with object but parameters must be same as key */

// Rest parameters
// Get infinite input
function demo(...params){
    console.log(params);
}
function demo1(a, ...params){
    console.log(a, params);
}
demo(1,2,3,4,5); // [1,2,3,4,5]
demo1(1,2,3,4,5); //1 [2,3,4,5]