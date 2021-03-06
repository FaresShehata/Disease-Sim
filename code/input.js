const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".slider-value");
const colors = document.querySelectorAll("input[type=color]");
/* Getting all the sliders, slider values, and colours as NodeLists. Both
slider lists are in the same order due to the structure of the html */

const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
const reset = document.getElementById("reset-button");
const saveGraph = document.getElementById("save-graph-button");
// Getting the buttons

start.addEventListener("click", () => {
  if (simulationRunning && simulationPaused) {
    simulationPaused = false;
  } else if (!simulationRunning) {
    getUserInput();
    simulationStart = true;
    graphStart = true;
  }
});

pause.addEventListener("click", () => {
  if (simulationRunning) simulationPaused = true;
});

reset.addEventListener("click", () => {
  simulationRunning = false;
  simulationPaused = false;
  people = [];
});

saveGraph.addEventListener("click", () => {
  graphSave = true;
});

sliders.forEach((slider, idx) => {
  slider.oninput = () => updateSliderValue(slider, idx);
});

function updateSliderValue(slider, idx) {
  const sliderValue = sliderValues[idx];
  sliderValue.innerHTML = Number.isInteger(parseFloat(slider.step))
    ? slider.value
    : formatDecimalPlaces(slider.value, 2);

  /* If the step of the input is an integer, set the p tag as the value.
  If the step of the input is not an integer, set the p tag as the value
  formatted to round to 2dp */

  if (idx === 1 /* population size */) {
    // idx = 2 for initial infected population
    sliders[2].max = slider.value;
    sliders[2].value = Math.min(slider.value, sliders[2].value);
    sliderValues[2].innerHTML = sliders[2].value;
    // Updating initial infected population when population size changes

    // idx = 7 for hospital capacity population
    sliders[7].max = slider.value;
    sliders[7].value = Math.min(slider.value, sliders[7].value);
    sliderValues[7].innerHTML = sliders[7].value;
    // Updating hospital capacity when population size changes

    //
  } else if (idx === 12 /* infectious period */) {
    // idx = 11 for asymptomatic period
    sliders[11].max = slider.value;
    sliders[11].value = Math.min(slider.value, sliders[11].value);
    sliderValues[11].innerHTML = sliders[11].value;
    // Updating asymptomatic period when infectious period changes

    //
  } else if (idx === 0 /* Speed */) {
    PARAMETERS.SPEED = slider.value;
    // Updating the parameter whenever the input is changed
  }
}

function getUserInput() {
  sliders.forEach((slider) => {
    const name = slider.id
      .replaceAll("-", "")
      .replace("slider", "")
      .toUpperCase();
    PARAMETERS[name] = parseFloat(slider.value);
  });

  colors.forEach((color) => {
    const name = color.id.replace("-", "").toUpperCase();
    COLORS[name] = color.value;
  });
}

function formatDecimalPlaces(num, n) {
  // This function returns num as a string, rounded to n decimal places
  return (Math.round(num * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
}
