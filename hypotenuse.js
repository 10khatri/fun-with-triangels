const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const btn = document.querySelector("#btn");
const output = document.querySelector(".output")

function handleEvent(){
  var baseValue=Number(baseInput.value); 
  var heightValue=Number(heightInput.value);

   var result=calculateResult(baseValue,heightValue);
  
 output.innerText="Length of hypotenuse : " + Math.sqrt(result);
  
};

function calculateResult(b,h){
  const sumOfSquares =  b * b+ h*h;
  return sumOfSquares;
}

btn.addEventListener("click", handleEvent)