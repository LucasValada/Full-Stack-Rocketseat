// import { sum, multiply } from "./calc.js";
// console.log(sum(10, 20));
// console.log(multiply(10, 20));

// import * as calc from "./calc.js";
// import sum, { multiply } from "./calc.js";
// console.log("4 + 5 =", sum(4, 5));
// console.log("4 * 5 =", multiply(4, 5));

// import { sum, multiply } from "./calc";
// console.log("4 + 5 =", sum(4, 5));
// console.log("4 * 5 =", multiply(4, 5));

import { Calc } from "./calc";
const calc = new Calc();
console.log("4 + 5 =", calc.sum(4, 5));
console.log("4 * 5 =", calc.multiply(4, 5));
