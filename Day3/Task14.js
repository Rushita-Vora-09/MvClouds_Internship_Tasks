function HighLowNumber(string) {
    strArray=string.split(' ')
    var max=parseInt(strArray[0])
    var min=parseInt(strArray[0])
    for (i of strArray) {
        if(parseInt(i)>max)
            max=parseInt(i)
        if(parseInt(i)<min)
            min=parseInt(i)
    }
    return max.toString()+' '+min.toString()
}
console.log(HighLowNumber('1 2 3 4 5'))