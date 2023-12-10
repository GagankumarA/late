let a = 4;
let b = 3;
console.log("Before:");
console.log(`a:${a} and b:${b}`);
a = a - b; //4-3=1
b = a + b; //1+3=4
a = b - a; //4-1=3
console.log("After:");
console.log(`a:${a} abd b:${b}`);