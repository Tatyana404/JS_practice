"use strict";

// Дан массив arr. Найдите среднее арифметическое его элементов

const arr = [12, 15, 20, 25, 59, 79];

function getAritmeticMean(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(getAritmeticMean(arr));
