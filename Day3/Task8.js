function countVowels(string) {
    var count=0
    for(i of string) {
        i = i.toLowerCase()
        if(i=='a'||i=='e'||i=='i'||i=='o'||i=='u')
            count+=1
    }
    return count
}
console.log('Vowels are ',countVowels('Celebration'))