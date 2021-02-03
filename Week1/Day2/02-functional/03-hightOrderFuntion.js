//hight order function
let employees = ["rais", "alif", "fahmi", "ahmad", "daffa", "ale", "amar", "andy", "rizky"];

const passwordFor = value => value.split("").reverse("").join("")+value.length;

//cara 1 : metode push manual, gunakan loop untuk isi passwordList
let passwordList = [];
passwordList.push(passwordFor(employees[0]));
console.log(passwordList)

//cara 2 : functional method
let passwordEmps =employees.map(passwordFor);
console.log(passwordEmps);

