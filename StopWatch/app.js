  var hr=0;
  var min=59;
  var sec=0;
  var count=0;

   var timer=false;

  function Start()
  {
    timer=true;
    Stopwatch();

  }

  function Stop()
  {
    timer=false;
  }

  function Reset()
  {
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";

    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";



  }

  function Stopwatch(){
    

    if(timer==true)
    {
        count=count+1;
        if(count==100){
            sec=sec+1;
            count=0;
        }

        if(sec==60)
        {
            min=min+1;
            sec=0;

        }

        if(min==60)
        {
            hr=hr+1;
            min=0;
        }


        var hrstr=hr;
        var minstr=min;
        var secstr=sec;
        var countstr=count;


        if(hrstr<10)
        {
            hrstr='0'+hrstr;
        }
        
        if(minstr<10)
            {
                minstr='0'+minstr;
            }
         
        if(secstr<10)
            {
                secstr='0'+secstr;
            }   
       
            
        if(countstr<10)
            {
                countstr='0'+countstr;
            }
        document.getElementById("hr").innerHTML=hrstr;
        document.getElementById("min").innerHTML=minstr;

        document.getElementById("sec").innerHTML=secstr;
        document.getElementById("count").innerHTML=countstr;

        setTimeout("Stopwatch()",10);
    }
  }