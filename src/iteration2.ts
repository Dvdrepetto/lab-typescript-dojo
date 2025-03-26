//
// Iteration 2 | Functions
//
function calcMultiplication(a: number, b: number): number {
  return a * b;
}
const result3 = calcMultiplication(2, 3);
console.log(result3); // 6

function isEven(num: number): boolean {
    return num % 2 === 0;
}
const result4 = isEven(4);  // true
console.log(result4);
const result5 = isEven(5);  // false
console.log(result5);

function calcArrayAverage(arr: number[]): number|string {
    if (arr.length === 0) {
        return "Please provide an array with at least one element";
    }
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}
const result6 = calcArrayAverage([1, 2, 3, 4, 5]);
console.log(result6); // 3