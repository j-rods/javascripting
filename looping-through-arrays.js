//define variable pets that references an array
var pets = ['cat', 'dog', 'rat'];
//Create a for loop that changes each string in the array
//so that they are plural.
var petsLength = pets.length;

for(var i = 0; i < petsLength; i++) {
  pets[i] = pets[i] + 's';
}

//print array
console.log(pets);
