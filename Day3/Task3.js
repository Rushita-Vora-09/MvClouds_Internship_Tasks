function includeEE(string)
{
    if(string.includes('ee'))
        return true
    else
    return false
}
console.log(includeEE('abcdeegf'))
console.log(includeEE('abcdegf'))
