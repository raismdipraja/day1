// initial map
let ceo = new Map();
ceo.set("facebook","Mark");
ceo.set("google","larry");

console.log(ceo.size);
console.log(ceo.get("google"));


for (const [key,value] of ceo){
    console.log(key+ " founded by "+value);
}

ceo.forEach((key,value)=>{
    console.log(key+" founded by" +value)
})