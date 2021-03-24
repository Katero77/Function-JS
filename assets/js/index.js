
function isNumber(value) {
  return Number(value) ? Number(value) : null;

}

function showResult (var1, var2, callback){
  if(var1 === null || var2 === null){
    console.log("Один из аргументов равен null, сравнение невозможно!");
    return;

  }
  if(isNumber(var1) && isNumber(var2)){
    console.log("Compare numbers")
    console.log( callback( parseInt(var1), parseInt(var2) ) );
  }

  else{
   console.log("Compare strings");
   console.log( callback(var1, var2) ); 
  }
}
/*task1*/
function max(num1, num2){
  return num1 > num2 ? num1 : num2;
}
/*task2*/
function min(num1, num2){
  return num1 < num2 ? num1 : num2;

}
/*task3*/
function isEven(value){
  if(isNaN(value)){
    console.log("it`s not a number");
    return null;

  }
  return value % 2 === 0;
}

/*task4*/

function solve(a, b, c){
  if(isNaN(a-b-c)){
    console.log("Wrong input");
    return null;
  }
  if(a === 0){
    console.log("A === 0. It`s mistake!!!");
    return false;
  }
  const D = discriminant(a, d, c);
  console.log(`discriminant = ${D}`);
  let result = 0;
  if(D < 0){
    console.log("Корней нет")
    return  null;

  }
  if(D === 0){
    return  (-b + Math.sqrt(D)) / (2 * a);

  }
   const x1 = (-b + Math.sqrt(D)) / (2 * a);
   const x2 = (-b + Math.sqrt(D)) / (2 * a);
   result = [x1, x2];
  return result;
}

function discriminant (a, b, c){
  return b ** 2 - (4 * a * c);

}
/*-----------Tests----------*/
/*Task1 tests*/
const maxValue1 = prompt("Enter first max value");
const maxValue2 = prompt("Enter second max value");
showResult(maxValue1, maxValue2, max);

/*Task2 tests*/
const minValue1 = prompt("Enter first min value");
const minValue2 = prompt("Enter second min value");
showResult(minValue1, minValue2, min);

/*Task3 tests*/
console.log(isEven(12));
console.log(isEven(18));
console.log(isEven("Hello"));
console.log(isEven(""));

/*Task4 tests*/
const a = +prompt("Enter a*");
const b = +prompt("Enter b*");
const c = +prompt("Enter c*");

console.log(solve(a, b, c));
