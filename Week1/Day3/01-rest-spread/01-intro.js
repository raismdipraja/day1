// kasus sum
const sum=(a,b)=>{
    return a+b;
}
console.log(sum(1,2));


// parameternya banyak
const sumRest=(... values)=>{
    let sum =0;
    values.forEach(element=>{
        sum += element; //sum = sum +element
    });
    return sum;
}
console.log(sumRest(1,2,3,4,5));


const firstName="code";
const lastName="id";
const gelar= "Sarjana";

const great=(...names)=>{
    return names.join(" ");

}
console.log(great(firstName,lastName,gelar));


