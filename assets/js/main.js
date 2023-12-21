"use strict";

// 1. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число
// 2. Дан массив arr = [12, 15, 20, 25, 59, 79]. Найдите среднее арифметическое его элементов
// 3. Выведите на экран случайное целое число от 1 до 100
// 4. Заполните массив 10-ю случайными целыми числами
// 5. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе
// 6. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
// 7. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
// 8. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6
// 9. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его
// 10. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент
// 11. Дан массив [1, 2, 3, 4, 5]. Запишите в новый элементы [1, 2, 3]
// 12. Дан массив [1, 2, 3, 4, 5]. Запишите в новый элементы [4, 5]
// 13. Дан массив [1, 2, 3, 4, 5]. Преобразуйте массив в [1, 4, 5]
// 14. Дан массив [1, 2, 3, 4, 5]. Запишите в новый массив элементы [2, 3, 4]
// 15. Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]
// 16. Дан массив [1, 2, 3, 4, 5]. Сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
// 17. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его
// 18. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей
// 19. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет
// 20. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false
// 21. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false

// Task 1

const numbers = [4, -2, 5, 19, -130, 0, 10];

const getMin = (arr) => {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

const getMax = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

const getMinAndMaxNumbers = (arr) => [getMin(arr), getMax(arr)];

console.log(getMinAndMaxNumbers(numbers));

// Task 2

const arr = [12, 15, 20, 25, 59, 79];

const getArithmeticMean = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

console.log(getArithmeticMean(arr));

// Task 3

console.log(Math.ceil(Math.random() * 100));

// Task 4

const integers = [];

for (let i = 0; i < 10; i++) {
  integers.push(Math.ceil(Math.random() * 100));
}

console.log(integers);

// Task 5

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr1.concat(arr2));

// Task 6

const arr3 = [1, 2, 3];

console.log(arr3.reverse());

// Task 7

const arr4 = [1, 2, 3];

arr4.push(4, 5, 6);

console.log(arr4);

// Task 8

const arr5 = [1, 2, 3];

arr5.unshift(4, 5, 6);

console.log(arr5);

// Task 9

const arr6 = ["js", "css", "jq"];

const shifted = arr6.shift();

console.log(shifted);
console.log(arr6);

// Task 10

const arr7 = ["js", "css", "jq"];

const popped = arr7.pop();

console.log(popped);

// Task 11

const arr8 = [1, 2, 3, 4, 5];

console.log(arr8.slice(0, 3));

// Task 12

const arr9 = [1, 2, 3, 4, 5];

console.log(arr9.slice(3, 5));

// Task 13

const arr10 = [1, 2, 3, 4, 5];

arr10.splice(1, 2);

console.log(arr10);

// Task 14

const arr11 = [1, 2, 3, 4, 5];

console.log(arr11.slice(1, 4));

// Task 15

const arr12 = [1, 2, 3, 4, 5];

arr12.splice(3, 0, "a", "b", "c");

console.log(arr12);

// Task 16

const arr13 = [1, 2, 3, 4, 5];

arr13.splice(1, 0, "a", "b") &&
  arr13.splice(6, 0, "c") &&
  arr13.splice(8, 0, "e");

console.log(arr13);

// Task 17

const arr14 = [3, 4, 1, 2, 7];

console.log(arr14.sort());

// Task 18

const obj = { js: "test", jq: "hello", css: "world" };

console.log(Object.keys(obj));

// Task 19

const hasElem = (array, string) => {
  for (let i = 0; i < array.length; i++) {
    if (string === array[i]) {
      return true;
    }
  }

  return false;
};

console.log(hasElem([3, 4, 7, 2], "test"));
console.log(hasElem([3, 4, "test", 7, 2], "test"));
console.log(hasElem([3, 4, "string", 7, 2], "test"));

// Task 20

const hasNumber = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (number === array[i]) {
      return true;
    }
  }

  return false;
};

console.log(hasNumber([3, 4, 7, 2], 5));
console.log(hasNumber([3, 4, 7, 2], 4));

// Task 21

const hasTwoIdenticalNumbers = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      return true;
    }
  }

  return false;
};

console.log(hasTwoIdenticalNumbers([3, 4, 7, 2]));
console.log(hasTwoIdenticalNumbers([3, 4, 7, 7, 2]));
