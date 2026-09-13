const fruits = ["apple", "banana"];

const moreFruits = [...fruits, "orange"];
console.log(moreFruits); // ["apple", "banana", "orange"]
console.log(fruits);


const user = { name: "Marcus", age: 20 };

const olderUser = { ...user, age: 21 };
console.log(olderUser); // { name: "Marcus", age: 21 }
console.log(user);