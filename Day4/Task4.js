function findTime()
{
    const lunch_hour=document.getElementById('lhr').value
    const lunch_min=document.getElementById('lmin').value
    const curr_hour=document.getElementById('chr').value
    const curr_min=document.getElementById('cmin').value
    const para=document.getElementById('content')

    const lunch_time=new Date()
    const curr_time=new Date()

    lunch_time.setHours(lunch_hour)
    lunch_time.setMinutes(lunch_min)

    curr_time.setHours(curr_hour)
    curr_time.setMinutes(curr_min)

    remaining_time=lunch_time-curr_time
    remaining_hour=Math.floor(remaining_time/(60*60*1000))
    str_min=toString(Math.abs(remaining_time/(60*60*1000))).split('.')
    
    remaining_min=(remaining_time/(60*60*1000)-Math.floor(remaining_time/(60*60*1000)))*60
    console.log('Time remaining is: ',remaining_hour)
    para.textContent= 'Time remaining is: '+remaining_hour+' H '+remaining_min+' Min'
}