function akanName(){
    var input=document.getElementById('D1').value;
    var D=new Date(input);
     YY=D.getFullYear ();
     MM=D.getMonth ();
     MM=MM+1;
     DD=D.getDate();
     if(document.querySelector("#Male").checked){
         var gender='Male'; 
        }
        else{
 
            var gender='Female';     
            }
            console.log(gender);
 var CC=parseInt(YY/100)+1;
var d=parseInt(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7);
var d=(d.toFixed(0));
console.log(d);
// male conditions

if(d==0 && gender=='Male'){
    document.getElementById("boo").innerHTML= " your Akan Name is Kwasi";
}
else if(d==1 && gender=='Male'){
    document.getElementById("boo").innerHTML=" your Akan Name is Kwadwo";
}
else if(d==2 && gender=='Male'){
    document.getElementById("boo").innerHTML=" your Akan Name is Kwabena";
}
else if(d==3 && gender=='Male'){
    document.getElementById("boo").innerHTML=" your Akan Name is Kwaku";
}
else if(d==4 && gender=='Male'){
    document.getElementById("boo").innerHTML=" your Akan Name is Yaw";
}
else if(d==5 && gender=='Male'){
    document.getElementById("boo").innerHTML=" your Akan Name is Kofi";
   
}
else if(d==6 && gender=='Male'){
    document.getElementById("boo").innerHTML=" your Akan Name is Kwame";

}
// female Akan Names

if(d==0 && gender=='Female'){
    document.getElementById("boo").innerHTML=" your Akan Name is Akosua";
}
else if(d==1  && gender=='Female'){
    document.getElementById("boo").innerHTML=" your Akan Name is Adwoa";
}
else if(d==2 && gender=='Female'){
    document.getElementById("boo").innerHTML="your Akan Name is benaa";
}
else if(d==3 && gender=='Female'){
    document.getElementById("boo").innerHTML=" your Akan Name is Akua";
}
else if(d==4 && gender=='Female'){
    document.getElementById("boo").innerHTML=" your Akan Name is Yaa";
}
else if(d==5 && gender=='Female'){
    document.getElementById("boo").innerHTML="your Akan Name is Afua";
}
else if(d==6 && gender=='Female'){
    document.getElementById("boo").innerHTML=" your Akan Name is Ama";
}
}