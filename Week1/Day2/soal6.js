const carl =(number, target) => {
    for (const i of number){
        for(const j of number){
            if(i+j === target){
                return console.log(carl(i,j))
            }
        }
    }
}

carl ([1,2,3,4,5,6,7,8,9], 15)