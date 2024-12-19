const form1=document.getElementById('formdatalogin')
form1.addEventListener("submit",(e)=>
{
    e.preventDefault();
    const lname=document.getElementById('lname').value;
    const lemail=document.getElementById('lemail').value;
    
    console.log(lname, lemail) 
});
    