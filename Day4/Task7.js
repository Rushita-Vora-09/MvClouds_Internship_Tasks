const file = require('fs');

file.readFile('Task7.txt', (err, data) => {
    if (err) throw err;

    data=data.toString()

    arr=data.split('\r\n')
    console.log(arr)

    for (i of arr) {   
        min=i.length
        extraArr=[]
        console.log(i)
        obj={}
        i=i.split('') 
        for (j=0;j<i.length;j++) {
            a=i[j]
            b=j

            for (k=j+1; k<=i.length; k++) {

                element=i[k]
                if(i[k]==a) {
                  
                    if(k-b<min) {
                      min=k-b
                      extraArr[0]=element
                      extraArr[1]=b 
                      extraArr[2]=k 
                    }
                }
            }
        }
    obj[extraArr[0]]=[extraArr[1],extraArr[2]]
    console.log(obj)
    }
});