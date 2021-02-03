// initial set, hanya menampung value unique(tidak akan ada value yang sama)
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("code");
mySet.add(2);

for(const my of mySet){
    console.log(mySet);
}