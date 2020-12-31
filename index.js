"use strict";

// Работа с concat
// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

// Работа с reverse
// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]

const array = [1, 2, 3];
console.log(array.reverse());

// Работа с push, unshift
// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6

const ar = [1, 2, 3];
const newElements = ar.push(4, 5, 6);
console.log(ar);

// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6

const myArray = [1, 2, 3];
myArray.unshift(4, 5, 6);
console.log(myArray);

// Работа с shift, pop
// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его

const myArr = ["js", "css", "jq"];
const shifted = myArr.shift();
console.log(myArr);

// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент

const myAr = ["js", "css", "jq"];
const popped = myAr.pop();
console.log(myAr);

// Работа с slice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]

const arreyNum1 = [1, 2, 3, 4, 5];
console.log(arreyNum1.slice(0, 3));

// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]

const arreyNum2 = [1, 2, 3, 4, 5];
console.log(arreyNum2.slice(3, 5));

// Работа с splice
// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]

const arreyNum3 = [1, 2, 3, 4, 5];
const Num3 = arreyNum3.splice(arreyNum3.length - 4, 2);
console.log(arreyNum3);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]

const arreyNum4 = [1, 2, 3, 4, 5];
console.log(arreyNum4.slice(1, 4));

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]

const arreyNum5 = [1, 2, 3, 4, 5];

const Num5 = arreyNum5.splice(3, 0, "a", "b", "c");
console.log(arreyNum5);

// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

const arreyNum6 = [1, 2, 3, 4, 5];

const Num6 =
  arreyNum6.splice(1, 0, "a", "b") &&
  arreyNum6.splice(6, 0, "c") &&
  arreyNum6.splice(8, 0, "e");

console.log(arreyNum6);

// Работа с sort
// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его

const arrNum = [3, 4, 1, 2, 7];
console.log(arrNum.sort());

// Работа с Object.keys
// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей

const objKeys = { js: "test", jq: "hello", css: "world" };
console.log(Object.keys(objKeys));
