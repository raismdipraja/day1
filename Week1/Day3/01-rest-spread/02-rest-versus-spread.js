// spread operator
const x = [1,2,3];
const y = ["a", "b", "c"];
const z=[...x,...y,4,6,7];
console.log(z);


//rest parameter
const {a, ...rest} ={a:1,b:2,c:3};
console.log(a);
console.log(rest);

//spread operator
const spread = {a:1,b:2,c:3}
const myspread = {a:1,...spread}
console.log(myspread);
