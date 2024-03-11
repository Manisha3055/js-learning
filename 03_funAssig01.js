console.log("===Assignment 1 ===");
function name(){
    console.log("Manisha");
    console.log("Mane");
}
name();

console.log("=== Assignment 2 ===");
function personalDetails(firstName, lastName, collegeName) {
    console.log("My first Name: " + firstName);
    console.log("My last Name: " + lastName);
    console.log("My college Name: " + collegeName);
}

// Example function call
personalDetails("Manisha", "Mane", "Dbatu University");

console.log("=== Assignment 3 ===");
function swapValues(arg1, arg2) {
    console.log("Before swap:");
    console.log("arg 1:", arg1, "arg 2:", arg2);
    //console.log("arg 2:", arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;

    console.log("After swap:");
    console.log("arg 1:", arg1, "arg 2:", arg2);
    //console.log("arg 2:", arg2);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);


console.log("=== Assignment 4 ===");
function addThreeValues(value1, value2, value3) {
    if (typeof value1 === 'string' || typeof value2 === 'string' || typeof value3 === 'string') {
        console.log("Concate Value:", value1 + value2 + value3);
    } else {
        console.log("Addition:", value1 + value2 + value3);
    }
}

// Call the function with numeric values
addThreeValues(10.23, 600, 40);

// Invoke the same function with string values
addThreeValues(" Hello", " Good", " Morning");







