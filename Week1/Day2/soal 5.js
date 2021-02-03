const digitSum = angka => angka.toString().split("").reduce(((a,b)=> Number(a) + Number(b)));
console.log(digitSum(2356));
console.log(digitSum(23567))