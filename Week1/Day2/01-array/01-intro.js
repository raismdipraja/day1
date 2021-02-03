//initial array
var array = new Array(3);
array[0] = 3;
array[1] = 3;
array[2] = "CODE";

console.log(array);

//initial array with dynamic element
array = ["code",["js","react"],"bootcamp", 2021];
console.log(array);

//add new element in last index
var list = ["a","b","c","d"];
list.push("j","r"); //menambah element baru
console.log(list);

//remove element
list.pop();
console.log(list);


//add element index di index pertama
list.unshift("x");
console.log(list);

//delete first element
list.shift();
console.log(list);


//accses index tertentu
console.log(list[2]);

//looping for array
for (let i = 0; i < list.length; i++) {
    const element = list[i];
    console.log(element);
}

//for of
for (const key of list) {
    console.log(key);
}

//foreach bila element nya array
list.forEach(element=>{
    console.log(element)
});
