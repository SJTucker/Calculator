debugger
console.log("welcome to your calc app");
var x;
var y;
var operator = prompt("Add (+) or Subtract (-) or Multiply (*) or Divide (/) or Power (p) or Factorial (f) or quit (q)");

while(operator != "q"){

/*if(operator ==="f"){
  x = prompt("What is your number?");
  x = parseInt(x);
  result = factor(x);
  console.log(result);
function factor(a){
  var result = 1;
  for(count = 1;count < a;count++){
    result *= count;
    return result;
  }
}*/


x = prompt("What is your first number?");
y = prompt("What is your second number?");
x = parseInt(x);
y = parseInt(y);

var result;


if(operator === "+")
  result = add(x, y);
else if(operator === "-")
  result = sub(x, y);
else if(operator === "*")
  result = mult(x, y);
else if(operator === "/") 
  result = div(x, y);
else if(operator === "p")
  result = pow(x, y);
else
  result = factor(x);
console.log(result);
operator = prompt("Add (+) or Subtract (-) or Multiply (*) or Divide (/) or quit (q/Q)");
//or
//switch(operator){
//  case "+":
//    result = add(x, y);
//    break;
//  case "-":
//    result = sub(x, y);
//    break;
//  case "*":
//    result = mult(x, y);
//    break;
//  case "/":
//    result = div(x, y);
//
//}


function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function mult(a, b){
  return a * b;
}

function div(a, b){
   return a / b;
}
//WRONG
//function factor(a){
//  result = 1;
//  for(count = 1;count < a;count++){
//    result = (result + 1) * result;
//  }
//  return result;
//}

function factor(a){
  result = 1;
  for(counter = 0; counter < a; counter ++)
    result = (counter + 1) * result;
  return result;
}

function pow(base, exp){
  result = 1;
  for(counter = 0; counter < exp; counter ++)
    result *= base;
  return result;
}
}
