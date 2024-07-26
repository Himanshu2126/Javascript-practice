function changebg(color)
{
    document.body.style.backgroundColor=color;
   
 let text=document.getElementsByClassName("cr");

if(color=="#000000")
{
    for(let ele of text)
    {
        ele.style.color="white";
    }
    
}
else{
    for(let ele of text)
        {
            ele.style.color="black";
        }
        
}
}

