function sequence(string) {
    arr=string.split('')
    str=''
    count=parseInt(arr[0])-1
    
    for(i of arr) {
        n=parseInt(i)
        if (count+1==n)
            str+=i.toString()
        else 
            str+=' '+i.toString()
        count=n
    }   
    return str
}
console.log(sequence('1235689'))