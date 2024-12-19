// Task 1
function appendedString(string) {
    string+=' '+'something'
    return string
}
console.log(appendedString('Hello'))


// Task 2
function num_of_digits(num) {
    num = Math.abs(num);
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}
console.log(num_of_digits(1000)); 
console.log(num_of_digits(12));   


// Task 3
function includeEE(string)
{
    if(string.includes('ee'))
        return true
    else
        return false
}
console.log(includeEE('abcdeegf'))
console.log(includeEE('abcdegf'))


// Task 4
function Table(user_input) {
    for(i=1;i<=10;i++) {
        console.log(user_input,' * ',i,' = ',user_input*i)
    }     
}
Table(4)


//  Task 5
var number=43
reverce_number=number%10

reverce_number=reverce_number*10+Math.floor(number/10)

console.log(reverce_number)

if(reverce_number>number)
    console.log(true)
else
    console.log(false)


// Task 6
function mimics(number,shift) {
    return(number/2**shift)
}
console.log(mimics(80,3))
console.log(mimics(-24,2))


//  Task 7
function removeZeros(string) {
    intdata=Math.floor(parseInt(string))
    return intdata.toString()
}
console.log(removeZeros('00204.000'))


// Task 8
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


// Task 9
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


// Task 10
function sortByASCCI(string) {
    var arr=string.split('')
    var newStr=arr.sort().join('')
    return newStr
}
console.log(sortByASCCI('AbgyJofeNcipQR'))


// Task 11
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


// Task 12
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


// Task 13
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

// Task 14
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