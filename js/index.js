//1
// let num = 10;
// array = [];
// for (let index = 1; index <= num; index++) {
//   array.push(index);
// }
// console.log(array);

//2
// let array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = [0, 0];
// for (let index = 0; index < array.length; index++) {
//   if (array[index] % 2 === 0) {
//     res[0] += array[index];
//   } else {
//     res[1] += array[index];
//   }
// }
// console.log(res); // 30, 24

//3
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 8, 9, 10];
// let sum = 0;

// for (let index = 0; index < array1.length; index++) {
//   sum += array1[index];
// }

// for (let index = 0; index < array2.length; index++) {
//   sum += array2[index];
// }

// console.log(sum); // 55

//4
// let array = [1, 2, 3, 4, 5];
// let teskari = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   teskari.push(array[i]);
// }

// console.log(teskari);

//5
// let array = [5, 4, 3, 2];
// let min = array[0];

// for (let i = 1; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i];
//   }
// }

// let result = Math.pow(min, 4);
// console.log(result); //16

//1 Ishlolmadim

//2
// let array = ["lion", "tiger", "wolf"];
// let res = [];

// for (let i = 0; i < array.length; i++) {
//   if (typeof array[i] == "string") {
//     res.push(array[i].length);
//   }
// }

// console.log(res); // 4, 5, 4;

//3
// let array = [1, 2, 3, 4, 5, 6, 7];
// let a = 0;
// for (let i = 0; i < array.length - 1; i++) {
//   if (array[i] % 2 === 0) {
//     a = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = a;
//     i++;
//   }
// }

// console.log(array); // Natija:   1, 3, 2, 5, 4, 7, 6

//4
// let array = [1, 2, 3, 4, 5];
// let teskari = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   if (array[i] % 2 == 0) {
//     teskari.push(array[i]);
//   } else {
//     teskari.push(0);
//   }
// }

// console.log(teskari); // Natija: [0, 4, 0, 2, 0]

//5
// let array = [10, 20, 30, 40];
// let result = [];

// for (let i = 0; i < array.length; i++) {
//   result.push(i);
// }

// console.log(result); //0, 1, 2, 3

//6
// let array = [1, 2, 3, 4, 5, 6, 7];
// let result = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 3 !== 0) {
//     result.push(array[i]);
//   }
// }

// console.log(result); //1, 2, 4, 5, 7

//7 Savolga tushunmadim
//8
// let array = [1, 2, 3, 4];
// let result = [array[0]];

// for (let i = 1; i < array.length; i++) {
//   result.push(array[i - 1]);
// }

// console.log(result); // Natija: [1, 1, 2, 3]

//9
// let array = [-1, 2, 3, 4, -5];
// let res = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] >= 0) {
//     res.push(array[i]);
//   }
// }

// console.log(res.length); //3

//10
// let array = [-1, 2, -3, 4, -5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     sum += array[i];
//   }
// }

// console.log(sum); //-9

//11 Savolga tushunmadim

//12
// let array = [-1, 2, -3, 4, -5];
// let res = 1;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 0) {
//     res *= array[i];
//   }
// }

// console.log(res); //8

//13
// let array = ["bwm", "mersades", "supra", "chevrolet"];
// let max = array[0];
// let min = array[0];

// for (let i = 0; i < array.length; i++) {
//   if (array[i].length > max.length) {
//     max = array[i];
//   }
//   if (array[i].length < min.length) {
//     min = array[i];
//   }
// }

// console.log(max); // chevrolet
// console.log(min); // supra
