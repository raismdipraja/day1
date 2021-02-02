function deretNegation(k){
    var positif = 0;
    var negatif = 0;
    var deret = "";
    for (let i = 0; i < k; i++) {
        if(i%2==0){
            negatif += -1
            deret = deret+","+negatif
        }else{
            positif += 1
            deret = deret + ","+positif
        }
    }
    return deret
}
console.log(deretNegation(5).substr(1))