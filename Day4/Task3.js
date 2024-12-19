function findDay()
{ 
    const date1=document.getElementById('date').value
    const para=document.getElementById('content')
    console.log(date1)
    const day2=new Date()
    const day1=new Date(date1)

    var remaining_days=day1-day2
    one_day=60*60*24*1000
    remaining_days=Math.floor(remaining_days/one_day)
    if(remaining_days==-1)
        remaining_days=0
    else if(remaining_days<-1)
        para.textContent= 'Past Date is not allowed!'
    console.log('remaining_days is: ',remaining_days)
    para.textContent= 'Remainin days From '+date1+' is  =>   '+remaining_days
}