let catchId = document.getElementById("catch");
let submitData = document.getElementById("collectTem").value;

function toCelcious() {
  console.log(submitData);
  let degCelcious = (5 / 9) * (submitData - 32);
  let currentTempareture = Math.floor(degCelcious);
  catchId.innerHTML = "Your Tempareture is " + currentTempareture + " &#8451";
}
