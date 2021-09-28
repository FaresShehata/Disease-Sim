// Global variables
const PARAMETERS = {
  POPULATIONSIZE: 0,
  INITIALINFECTEDPOPULATION: 0,
  INFECTIONRADIUS: 0,
  INFECTIONRATE: 0,
  RECOVERYRATE: 0,
  MORTALITYRATE: 0,
  HOSPITALCAPACITY: 0,
  HOSPITALRECOVERYRATE: 0,
  HOSPITALMORTALITYRATE: 0,
  SOCIALDISTANCERADIUS: 0,
  ASYMPPERIOD: 0,
  INFECTIOUSPERIOD: 0,
  SPEED: 0,
};

const COLORS = {
  HEALTHYCOLOR: "",
  ASYMPCOLOR: "",
  INFECTEDCOLOR: "",
  SEVERELYINFECTEDCOLOR: "",
  RECOVEREDCOLOR: "",
  DEADCOLOR: "",
};

const HEALTHY = "h";
const ASYMP = "a";
const INFECTED = "i";
const SEVERELYINFECTED = "s";
const RECOVERED = "r";
const DEAD = "d";

let HOSPITALWIDTH, HOSPITALHEIGHT;

const PERSONRADIUS = 10;

const PERSONMAXSPEED = 5;

const MINIMUMACC = 10;

const SOCIALDISTANCESTRENGTH = 1.3;

const SOCIALDISTANCEMULTIPLIER = 1.5;

let people = [];

let currentFrame = 0;

let hospitalOccupancy = 0;

let simulationRunning = false;

let simulationStart = false;

let simulationPaused = false;

function simulationSketch(p) {
  p.setup = function () {
    const width = p.windowWidth / 2 - 3 * 25;
    const height = 13 * 25;
    p.createCanvas(width, height);

    HOSPITALWIDTH = p.width * 0.35;
    HOSPITALHEIGHT = p.height * 0.35;
  };

  p.draw = function () {
    if (simulationStart) {
      initialiseSim(p);
      simulationStart = false;
    }

    drawSimulation(p);
    if (simulationRunning && !simulationPaused) {
      runSimulation(p);
    }
  };
}

new p5(simulationSketch, "sim-canvas");
