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