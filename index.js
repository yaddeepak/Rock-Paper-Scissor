var r=document.querySelector("#rock");
var p=document.querySelector("#paper");
var s=document.querySelector("#scissor");
var com=document.querySelector("#computer");
var rep=document.querySelector(".replace");

console.log(r);

//rock
r.addEventListener("click",function(){
    var rand=Math.floor(Math.random()*3);
    var path="images/"+rand+".png";
    com.src=path;
    if(rand===2)
    {
        rep.innerHTML="DRAW !";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
    else
    {
        rep.innerHTML="YOU WON !";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
});

s.addEventListener("click",function(){
    var rand=Math.floor(Math.random()*3);
    var path="images/"+rand+".png";
    com.src=path;
    if(rand>1)
    {
        rep.innerHTML="COMPUTER WON!";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
    else if(rand<1)
    {
        rep.innerHTML="YOU WON !";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
    else
    {
        rep.innerHTML="DRAW !";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
});

p.addEventListener("click",function(){
    var rand=Math.floor(Math.random()*3);
    var path="images/"+rand+".png";
    com.src=path;
    if(rand>0)
    {
        rep.innerHTML="COMPUTER WON!";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
    else
    {
        rep.innerHTML="DRAW !";
        rep.style.color="green";
        rep.style.fontSize="350%";
    }
});
