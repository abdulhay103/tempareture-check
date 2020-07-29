const catchId = document.getElementById("catch");
const catchSubmitDataId = document.getElementById("collectTem");
let customData = catchSubmitDataId.value;

function toCelcious() {
  console.log(customData);
  let degCelcious = (5 / 9) * (customData - 32);
  let currentTempareture = Math.round(degCelcious);
  catchId.innerHTML = "Your Tempareture is " + currentTempareture + " &#8451";
}
