"use-strict";

const date = document.getElementById("date");
date.innerHTML += (new Date()).toDateString();

const color = document.getElementById("colour");
const outputValue = document.getElementById("the-value");

function setColour() {
  outputValue.style.backgroundColor = color.value;
  console.log("colourEvent")
}
setColour();
color.addEventListener("change",
function() {
  outputValue.style.backgroundColor = color.value;
  console.log("colourEvent");
}
);
const range = document.getElementById("range");
range.addEventListener("input", rangeAction);
outputValue.style.width = range.value

function rangeAction() {
  outputValue.style.width = `${range.value}%`
  outputValue.innerHTML = range.value
  console.log("rangeAction");
}


// const datePicker = document.getElementById("datePicker");

// function setDate() {
//   console.log("event");
//   const d = new Date(this.value);
//   date.innerHTML += d.toDateString();
//
// }
document.getElementById("datePicker").addEventListener("change", function() {
  console.log("event");
  let d = new Date(this.value);
  console.log(this.value);

  date.innerHTML = `HTML5 forms: ${d.toDateString()}`;
});
