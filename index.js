"use strict";

// Выведите на экран случайное целое число от 1 до 100

let arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(Math.ceil(Math.random() * 100));
}
console.log(arr);
