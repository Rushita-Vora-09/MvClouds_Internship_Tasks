function return1(a,b) {
    var sum=a+b
    if(sum.toString().length==1) {
        return sum
    }
    else {
        do {
        var mul=1
            while(sum>1) {

                digit= sum % 10
                sum=Math.floor(sum/10)
                mul*=digit
            }
            sum=mul
        } while(mul.toString().length!=1)
        return mul
    }
}
console.log(return1(16,28))
console.log(return1(4,5))
