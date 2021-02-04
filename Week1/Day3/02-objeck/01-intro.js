//initial object
const x = {}


const product={
    id:1,
    names: "Laptop Dell",
    price: 1500.00,
    variant:{
        type : "Gamer",
        core : "i7 Core"
    }
}

const infoProduct = info =>{
    return `Info product : ${info.names},${info.price}`
}

console.log(infoProduct(product));


// destecturing objectbwith parameter
const {id, ...info} = product;
console.log(id);
console.log(info);

const{variant:{core},price} = product;
console.log(core);
console.log(price);


