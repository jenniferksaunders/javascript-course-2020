"use strict";

let max_temps = [21, 30, 22, 12];

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days `;
  }
  return str;
}

console.log(printForecast(max_temps));
