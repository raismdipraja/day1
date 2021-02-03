let employees = ["rais", "alif", "fahmi", "ahmad", "daffa", "ale", "amar", "andy", "rizky"];

//old ways

function filterEmp (emps, prefix){
    let result =[];
    for (let i = 0; i < emps.length; i++) {
        if(emps[i].startsWith(prefix)){
            result.push(emps[i]);
        }        
    }
    return result;
}
console.log(filterEmp(employees,"a"));

//arrow function filter  
let filterEmployee = (emps,prefix) => emps.filter(emp => emp.startsWith(prefix));
console.log(filterEmployee(employees,"r"));