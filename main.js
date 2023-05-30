//variables

let user = 'John Doe';
console.log(user);

const student = 'Darya';
console.log(student);

// now user is 'Darya'
user = student;
console.log(user);

// primitives
let test = 1;
test++;
test += '1';
console.log(test); // now test = '21'

test--;
console.log(test); // now test = 1

test = !!test;
console.log(test); // now test = true

// arrays
let arr = [2, 3, 5, 8];
let product = 1;

for (let i = 0; i < arr.length; i++) {
  product *= arr[i];
}

console.log(`Product is ${product}`);

console.log('Numbers more than 5 and less than 10: ');
arr = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 5 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

console.log('Even numbers: ');
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
