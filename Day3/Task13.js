function capitalizeAscci(string) {
    var newStr=''
    for(i of string) {
        if (i.codePointAt()%2==0) {
            newStr+=i.toUpperCase()
        }
        else {
            newStr+=i.toLowerCase()
        }
    }
    return newStr
}
console.log(capitalizeAscci('THE LITTLE MERMAID'))