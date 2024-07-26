let textarea=document.getElementById("text");


  textarea.addEventListener('input',function(){

       var text=this.value;
       let char=text.length;
       document.getElementById("chr").innerHTML=char;


       text=text.trim();
       let  word= text.split(" ");
       let wordlen=word.length;
       let res=word.filter(function(e){
         return e!="";
       })
       
       document.getElementById("wrd").innerHTML=res.length;
  })

