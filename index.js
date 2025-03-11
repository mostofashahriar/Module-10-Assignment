// 1. Write a function named calculateSum that takes two arguments and returns the sum of the two arguments.

// function calculateSum(num1,num2){
//     return num1 + num2;
// }
// let sum = calculateSum(10,20)
// console.log(sum);

// 2. Write a function named isEven that takes one argument and returns true if the number is even, and false if it is not.

// function isEven(value){
//     if(value % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let result = isEven(50);
// console.log(result)

// 3. Write a function named findMax that takes an array of numbers and returns the largest number from the array.

// function findMax(numbers){
//     let max = numbers[0];
//     for(let i = 1; i < numbers.length; i++){
//         if(numbers[i] > max){
//             max = numbers[i];
//         }
//     }
//     return max;
// }
// let largestNumber = findMax([50,45,35,90,91,75,80,15]);
// console.log(largestNumber);

// 4. Write a function named filterOddNumbers that takes an array of numbers and returns a new array containing only the odd numbers.

// function filterOddNumbers(numbers){
//     let oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 !== 0){
//             oddNumbers.push(numbers[i]);
//         }
//     }
//     return oddNumbers;
// }
// let oddNumbers = filterOddNumbers([15,20,30,24,35,25,5,7,13,21,45,99,100,80])
// console.log(oddNumbers);

// 6. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.

// function removeDuplicates(array){
//     let newArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(newArray.indexOf(array[i]) === -1){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// let newArray = removeDuplicates([5,10,15,20,25,30,35,40,45,5,25,15,20,30,100])
// console.log(newArray);