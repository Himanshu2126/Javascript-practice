   var cel=document.getElementById("cel");
   var fah=document.getElementById("fah")


   cel.addEventListener("input",function(){
    var c=this.value;
    var f=(c *9/5) + 32;
    if(!Number.IsInteger(f)){
        f=f.toFixed(4);
    }

    fah.value=f;


   })

   fah.addEventListener("input",function(){
      var f=this.value;
      var c=(f -32) * 5/9;
      if(!Number.isInteger(c)){
        c=c.toFixed(4);
    }
      cel.value=c;
   }
)