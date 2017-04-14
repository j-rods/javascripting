//declare var numbers
var numbers;

//make numbers reference array of integers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//declare var filtered that references the result of filtering numbers
var filtered;

//define a function to filter numbers from the array
//that are divisible by 2
filtered = numbers.filter(function (number) {
    return (number % 2) === 0;
});

//print filtered array
console.log(filtered);
