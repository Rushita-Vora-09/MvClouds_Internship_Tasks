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

