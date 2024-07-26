
window.addEventListener('scroll',function(){
    let navbar=document.getElementById('navbar1');
  
      if(this.window.scrollY>=250)
      { 
         navbar.classList.add('stickey');

      }
      else{
        navbar.classList.remove('stickey');
      }
}) 

 