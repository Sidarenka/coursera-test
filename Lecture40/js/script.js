// var x; 
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined");
// }

// x = 5;
// if (x == undefined) {
//     console.log("x is undefined");
// }
// else {
//     console.log("x has been defined");
// }

// var string = "Hello";
// string += " World!";
// console.log(string + "!!")


// ***** Regular math operators: +, -, *, /
// console.log((5 + 4) / 3);
// console.log (undefined / 5);


// ***** Equality 
// var x = 4; y = 4;
// if (x == y) {
//     console.log("x=4 is equal to y=4");
// }
// x = "4"; // string
// if ( x == y) {
//     console.log("x='4' is egual to y=4")
// }


// ***** Strict Equality 
var x = "4"; y = 4;
if (x === y) {
    console.log("Strict: x='4' is equal to y=4");
}
else {
    console.log("Strict: x='4' is NOT equal to y=4");
}


// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);


// object creation 
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.lastname = "Zuckerberg";
// console.log(company);
// console.log("Company CEO name is: " + company.ceo.firstname + " " + company.ceo.lastname);

// console.log(company["name"]);
// console.log(company.name);

//Better way object literal
var facebook = {
    Name: "Facebook",
    CEO: {
        firstName: "Mark",
        lastName: "Zuckerberg"
    },
    "Stock of company": 110
};
console.log(facebook);

//Fuctions are first clacc data types 
//Functions ARE objects
function multiply(x, y) {
    return x * y;
};
multiply.version = "v.1.0.0";
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x;
    };
    return myFunc;
};

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing functions as arguments 
function doOperationOn (x, operation) {
    return operation(x);
};

var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn (100, doubleAll);
console.log(result);

var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for (var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);


//Arrays 
var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
    name = array[0];
    console.log("Hello " + name + "!");
};
array[3] = {course: "HTML, CSS & JS"};
console.log(array);
array[2]();

//Short hand array creation 
var names = ["Yaakov", "John", "Joe"];
console.log(names);
for (var i=0; i < names.length; i++) { 
    console.log("Hello " + names[i] + "!");
};

var names2 = ["Yaakov", "John", "Joe"];
var myObj = {
    name: "Yaakov",
    coursera: "HTML, CSS, JS",
    platform: "Coursera"
};
for (var prop in myObj) {
    console.log (prop + ": " + myObj[prop]);
};

//Closures 


// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// var a = {x: 7};
// var b = a;
// console.log(a);
// console.log(b);
// b.x = 5;
// console.log("After b.x update: ");
// console.log(a);
// console.log(b);








// // **** If statement (all false)
// if ( false || null || undefined || "" || NaN) { 
//     console.log("This line won't ever execute")
// }
// else {
//     console.log("All false");
// }


// // **** If statement  (all true)
// if(true && "hello" && 1 && -1 && "false") {
//     console.log("All true");
// }





// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }


// function makeMultiplier(multiplier) {
//     var myFunFunc = function (x) {
//       return multiplier * x;
//     };
    
//     return myFunFunc;
//   }
  
//   var operation = makeMultiplier(10);
//   console.log(operation(10));

  
  
//   var x = 5;
//   var y = x;
//   x = 10;
//   console.log(y);