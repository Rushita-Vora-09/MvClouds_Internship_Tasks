function moveCapitalFirst(string) {
    var newStr=''
    var lowerStr=''
    for(i of string) {
        if(i==i.toUpperCase()) {
            newStr+=i
        }
        else {
            lowerStr+=i
        }
    }
    return newStr+lowerStr
}
console.log(moveCapitalFirst('hApPy'))