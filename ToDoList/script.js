var inputbox=document.getElementById("input-box");
var container=document.getElementById("list");

function add(){


    if(inputbox.value==='')
    {
        alert("Enter task");
    }
    else
       {
        let li = document.createElement("li");
        console.log(li)
        li.innerHTML=inputbox.value;
        container.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

       }

       inputbox.value='';
     savedata();


}


container.addEventListener("click",function(e){

    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if( e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }
    
},);


function savedata(){
    localStorage.setItem("data",container.innerHTML)
}

function showdata(){
    container.innerHTML=localStorage.getItem("data");
}
showdata();