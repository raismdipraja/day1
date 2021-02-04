const listProduct =[
    {
        id:1,
        names: "Laptop Dell",
        price: 1500.00,
        variant:{
            type : "Gamer",
            core : "i7 Core"
        }
    },
    {
        id:2,
        names: "Laptop Asus",
        price: 1500.00,
        variant:{
            type : "Office",
            core : "i5 Core"
        }
    }
];

const filterProductByPrice= (products,id)=>{
    return products.filter(x=> x.id === id);
}
let result = filterProductByPrice(listProduct,2)

console.log(result)//hasilnya ada di variabel