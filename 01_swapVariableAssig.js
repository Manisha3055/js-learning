console.log("WAP to swap variable values using third variable");
console.log("====Assignment1====")
var Sweety = "Sweety"; // Sweety
var Cutie = "Cutie"; // Cutie
console.log("======== Before Swap ==========");
console.log("Sweety:", Sweety, " Cutie:", Cutie);

console.log("======== After Swap ==========");
var temp = Sweety;
Sweety = Cutie;
Cutie = temp;
console.log( "Sweety:", Sweety, " Cutie:", Cutie);


console.log("====Assignment2====")
var num1 = 100;
var num2 = 200;
var num3 = 300;
console.log("======== Before Swap ==========");
console.log("num1:", num1, "num2:", num2, "num3:", num3);

console.log("======== After Swap ==========");
var temp = num1;
num1 = num3;
num3 = temp;
console.log("num1:", num1, "num2:", num2, "num3:", num3);

