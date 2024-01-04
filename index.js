// let half = 1 / 2;
// let base = 4;
// let mass = 10;
// let areaOfTriangle = (1 / 2) * 4 * 10;
// console.log(areaOfTriangle);
// if (areaOfTriangle > 10) {
//   if (instructor === "Gabriel") console.log(instructor);
//   console.log(instructor);
//   console.log("area is greater than 10");
// } else {
//   console.log("area is less thsn 10");
// }
// console.log(instructor);
// let instructor = "Gabriel";

let numbers = [5, 7, 3, 9, 20, 30, 40];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
// while loop
let count = 0;
let altSum = 0;
while (count < numbers.length) {
  altSum = altSum + numbers[count];
  count = count + 1;
}
console.log(altSum);

// for in

let newSum = 0;
for (eachNumberIndex in numbers) {
  newSum = newSum + numbers[eachNumberIndex];
}
console.log(newSum);

function numArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  console.log(sum);
}

numArray([5, 7, 3, 9, 20, 30, 60, 38]);
