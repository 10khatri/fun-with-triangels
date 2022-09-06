const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const btn = document.querySelector("#btn");
const output = document.querySelector(".output")

function handleEvent(){
  var baseValue=Number(baseInput.value); 
  var heightValue=Number(heightInput.value);
 
   var result=calculateResult(baseValue,heightValue);
 
   output.innerText="Area of triange is: " + result + " square units"
  
};

function calculateResult(b,h){
  const area=  (b*h)/2;
  return area;
}

btn.addEventListener("click", handleEvent)