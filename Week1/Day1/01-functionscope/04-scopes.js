//global variabel
test = "js fullstack";
console.log(test);



//function scope
function scope(){
    var top = "top";
    console.log(top);


    
    var bottom = "bottom";
    console.log(bottom);
}
scope();




function scope2(print){
    var top = "atas";
    if(print){
        let insideIf = "print";
        console.log(insideIf)
    }
    
}
scope2(true);

// menggunakan const
const x = "hello";
// x= "hello js"
console.log(x);


// menggunakan let
let y = "hello";
y= "hello js";
console.log(y);


// menggunakan var
var z = "test";
var z = "cool";
console.log(z);
