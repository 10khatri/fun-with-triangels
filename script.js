const angle1=document.querySelector(".angle1");
const angle2=document.querySelector(".angle2");
const angle3=document.querySelector(".angle3");
const button=document.querySelector(".btn");                          const output=document.querySelector(".output");  

function handleEvent(){
  var ang1=Number(angle1.value);
  var ang2=Number(angle2.value);
  var ang3=Number(angle3.value);
  checkTriangle(ang1,ang2,ang3);
};

function checkTriangle(ang1,ang2,ang3){
  var sum = ang1+ang2+ang3;
  if(sum==180){
    output.innerText="It's a triangle.";
  }
  else{
    output.innerText="Opps it's not a triangle.";
  }
};

button.addEventListener("click", handleEvent);
