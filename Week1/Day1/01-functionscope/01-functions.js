// fungsion declaration

function foo(){
    return "Foo"
}

console.log(foo());

//fungsion expression
const fnc_exp = function (value){
    return value;
}

console.log(fnc_exp);



//fungsion expression with name
const fnc_exps = function foo (value){
    return value;
}

console.log(fnc_exp);


//arrow function
const fn_arrow =()=>{

}

const arrow = (value)=>{
    "hello" +value
}

console.log(arrow("JS"));