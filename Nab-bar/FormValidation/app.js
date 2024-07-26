  
  
  function validation(){
    let flag=1;
    let flag2=1


    let name=document.getElementById("username");

    let pass=document.getElementById("password");

    if(name.value=="")
    {
        console.log("empty")
        document.getElementById("nerror").innerHTML="UserName is Empty"
        flag=0;

    }
    else if(name.value.length < 3)
    {
        document.getElementById("nerror").innerHTML="UserName require min 3 characters";
        flag=0;
    }
    else{
        document.getElementById("nerror").innerHTML="";
        flag=1;
    }


    if(pass.value=="")
    {
        document.getElementById("passerror").innerHTML="Password is empty";
        flag2=0;
    }
    else{

        document.getElementById("passerror").innerHTML="";
        flag2=1;
    }


    if(flag && flag2)
    {
        return true
    }
   else
    {
    return false;
    } 
  
  }