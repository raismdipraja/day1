//slice
var list = ["a","b","c","d"];
// console.log(list.slice(1,2));
// var b = list.slice(1,3);
// console.log(b);

//splice untuk mengganti isi dari list tertentu
console.log(list.splice(2,1,"e","f"))


//copy array memiliki reference yang sama
var list1= list;
console.log(list1);

//jika list1 diubah maka variabel source  nya ikut berubah(non imutable)
list1.splice(2,1,"z");
console.log(list);

//alternatif copy array
var list2 = Array.from(list);

//concat array(menggabungkan list)
var listX = [1,2,3];
var listY = [4,5,6];
var listZ = listX.concat(listY);
console.log(listZ);