const users = [
{ id: 1, name: "Mari", age: 22, active: true, address: {city: "Tallinn"} },
{ id: 2, name: "Jüri", age: 17, active: false },
{ id: 3, name: "Kati", age: 31, active: true },
{ id: 4, name: "Martin", age: 19, active: false },
{ id: 5, name: "Laura", age: 26, active: true }
]

//3.1
//tagastab nimed massiivist
users.forEach((user) => {
  console.log(user.name);
});
console.log("");

//3.2
//tagastab kasutaja objektid, millel active = true
const activeUsers = users.filter((p) => p.active === true);
console.log(activeUsers);
console.log("");

//3.3
//tagastab kasutaja objektid, millel vanus >= 18
const adultUsers = users.filter((p) => p.age >= 18);
console.log(adultUsers);
console.log("");

//3.4
//loob uue massiivi nimega onlyNames, mis saab oma väärtused users.name väärtustest
const onlyNames = users.map((p) => p.name)
console.log(onlyNames);
console.log("");

//3.5
//leiab ja tagastab .find() abil massiivist id == 3 kasutaja
console.log(users.find((user) => user.id === 3));
console.log("");

//3.6
//funktsioon, mis tagastab kas kasutaja on aktiivne või mitte
function getUserStatus (user) {
    if (user.active == true) { console.log("Aktiivne")}
    else {console.log("Mitteaktiivne")}
    console.log("");
}
getUserStatus(users[0]);

//3.7
//annan greeting muutujale funktiooni väärtuse
const getGreeting = (user) => `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`
console.log(getGreeting(users[0]));
console.log("");

//3.8
//loon konstandid name age users[] objektist
const {name, age} = users[0];
console.log(name);
console.log(age);
console.log("");

//3.9
//loon massiivist koopia kuhu on lisatud uus kasutaja
const newUser = { id: 6, name: "Karl", age: 24, active: true };
const updatedUsers = [...users, newUser];
console.log(updatedUsers);
console.log("");

//3.10
//Lisasin massiivi esimesele kasutajale linna omaduse ja for each meetod tagastab kõigi kasutajate andmed
users.forEach((user) => {
    const city = user.address?.city ?? "Linn puudub"
    console.log(`${user.name}: ${city}`);
    console.log("");
});

//3.11
//kontrollib kas kasutaja on aktiivne või mitte ja selle põhjal annab muutujale väärtuse
users.forEach((user) => {
    const status = user.active ? "Aktiivne" : "Mitteaktiivne";
    console.log(`${user.name} - ${status}`);
});
console.log("");

//3.12
//massiivi koopia sortedByAge on users aga sorteeritud 
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
sortedByAge.forEach((user) => {
    console.log(`${user.name}: ${user.age}`);
})


