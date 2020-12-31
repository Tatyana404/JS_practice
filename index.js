"use strict";

// Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

function hasElem(array, string) {
  for (let i = 0; i < array.length; i++) {
    if (string === array[i]) {
      return true;
    }
  }
  return false;
}

// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false

function checkForNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return true;
    }
  }
  return false;
}

// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false

function checkForTwoIdenticalNumbers(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }
  return false;
}
