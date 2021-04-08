var a= document.getElementById("ctof");
var b= document.getElementById("ftom");
var c= document.getElementById("itocm");
var d= document.getElementById("ptokg");
var e= document.getElementById("ftoc");
var f= document.getElementById("mtof");
var g= document.getElementById("cmtoi");
var h= document.getElementById("kgtop");
var spn= document.getElementById("res");
var clear= document.getElementById("clr");

a.onclick=function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
  }
  else{
    var fr= ((9/5)*n)+32;
    var far= fr.toFixed(2);
    spn.innerHTML = n+" degree C= "+ far+" degree F";
  }
}
e.onclick=function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
    }
  else{
    var cl= (n-32)*(5/9);
    var cel= cl.toFixed(2);
    spn.innerHTML = n+" degree F= "+ cel+" degree C";
  }
}
b.onclick= function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
  }
  else if(n<0){
    alert("Cannot be less than 0");
  }
  else{
    var mts= n/3.2808;
    var meter=mts.toFixed(2);
    spn.innerHTML = n+" ft= "+meter+" m";
  }
}
f.onclick= function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
  }
  else if(n<0){
    alert("Cannot be less than 0");
  }
  else{
    var fts= n*2.2808;
    var feet= fts.toFixed(2);
    spn.innerHTML = n+" m= "+feet+" ft";
  }
}
c.onclick= function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
  }
  else if(n<0){
    alert("Cannot be less than 0");
  }
  else{
    var cms= n*2.54;
    var cm= cms.toFixed(2);
    spn.innerHTML = n+" in= "+cm+" cm";
  }
}
g.onclick= function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
  }
  else if(n<0){
    alert("Cannot be less than 0");
  }
  else{
    var inchs= n/2.54
    var inch= inchs.toFixed(2);
    spn.innerHTML = n+" cm= "+inch+" inches";
  }
}
d.onclick= function(){
  var n= document.getElementById("num").value;
  if(n==""){
    alert("Field cannot be empty!");
  }
  else if(n<0){
    alert("Cannot be less than 0");
  }
  else{
    var kg= n*0.453592;
    var kgs= kg.toFixed(2);
    spn.innerHTML = n+" lbs= "+kgs+" kg";
  }
}
h.onclick= function(){
  var n= document.getElementById("num").value;
  if(n==""){
     alert("Field cannot be empty!");
  }
  else if(n<0){
    alert("Cannot be less than 0");
  }
  else{
    var lb= n/0.453592;
    var lbs= lb.toFixed(2);
    spn.innerHTML = n+" kg= "+lbs+" lbs";
  }
}
clear.onclick= function(){
  document.getElementById("num").value='';
  spn.innerHTML = "";
  document.getElementById("num").focus();
  document.getElementById("num").select();
}
