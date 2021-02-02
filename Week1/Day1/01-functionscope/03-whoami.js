function whoAmI(value){
    if(typeof value === "number"){
        return "your are number";
    }else if(typeof value === "string"){
        return "you are String";
    }else if(typeof value === "boolean"){
        return "you are Boolean";
    }else{
        return "undefined";
    }
}
console.log(whoAmI(45));
console.log(whoAmI(false));
console.log(whoAmI("rais"));
