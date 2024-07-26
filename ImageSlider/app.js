    let flag=0;
    

    function controler(x){
        flag=flag+x;
        slidshow(flag);
    }
    slidshow(flag);
    function slidshow(num){
        let slids=document.getElementsByClassName("slid1");

        if(flag==slids.length)
        {
            flag=0;
            num=0;
        }

        if(flag<0)
        {
            flag=slids.length-1;
            num=slids.length-1;
        }

        for(let y of slids)
        {
            y.style.display="none";

        }

          slids[num].style.display= " block";

    }
    