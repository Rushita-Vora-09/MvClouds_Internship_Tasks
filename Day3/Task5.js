var number=43
reverce_number=number%10

reverce_number=reverce_number*10+Math.floor(number/10)

console.log(reverce_number)

if(reverce_number>number)
    console.log(true)
else
    console.log(false)