function makeFactorsArray(num) {
    var arr = [];
    arr.push(1)
    for(i=2;i<num;i++) {
        if(num%i==0)
            arr.push(i)
        else 
            continue
    }
    arr.push(num);
    return arr;
}
console.log(makeFactorsArray(12))
console.log(makeFactorsArray(4))
