/* 

// First task

const A = 100;
const B = 200;
const C = 300;
const D = 400;

let e = A + B;
let f = C - D;

let result = e*f;

let evenness = result % 2;

const para = document.createElement("p");
para.textContent = evenness;
document.body.appendChild(para); 

*/

// ---------------------

// Second task

// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;
let finalNumber

result = result * result2;
let finalResult = result.toFixed(2);
if (typeof finalResult === "string") {
    finalNumber = Number(finalResult);
}
else {
    finalNumber = finalResult;
}

const para = document.createElement("p");
para.textContent = finalNumber;
document.body.appendChild(para); 