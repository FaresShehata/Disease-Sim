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

// let POPULATIONSIZE,
//   INITIALINFECTEDPOPULATION,
//   INFECTIONRADIUS,
//   INFECTIONRATE,
//   RECOVERYRATE,
//   MORTALITYRATE,
//   HOSPITALCAPACITY,
//   HOSPITALRECOVERYRATE,
//   HOSPITALMORTALITYRATE,
//   SOCIALDISTANCERADIUS,
//   ASYMPPERIOD,
//   INFECTIOUSPERIOD;

const HEALTHY = "h";
const ASYMP = "a";
const INFECTED = "i";
const SEVERELYINFECTED = "s";
const RECOVERED = "r";
const DEAD = "d";

// let HEALTHYCOLOR,
//   ASYMPCOLOR,
//   INFECTEDCOLOR,
//   SEVERELYINFECTEDCOLOR,
//   RECOVEREDCOLOR,
//   DEADCOLOR;

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

function simulationSketch(p) {
  p.setup = function () {
    const width = p.windowWidth / 2 - 3 * 25;
    const height = 13 * 25;
    p.createCanvas(width, height);

    HOSPITALWIDTH = p.width * 0.35;
    HOSPITALHEIGHT = p.height * 0.35;

    HEALTHYCOLOR = "#0000ff";
    ASYMPCOLOR = "#ffaa00";
    INFECTEDCOLOR = "#ff0000";
    SEVERELYINFECTEDCOLOR = "#770000";
    DEADCOLOR = "#000000";
    RECOVEREDCOLOR = "#888888";

    POPULATIONSIZE = 50;
    INITIALINFECTEDPOPULATION = 5;

    SOCIALDISTANCERADIUS = 4;

    INFECTIONRADIUS = 3;

    ASYMPPERIOD = 10;
    INFECTIOUSPERIOD = 20;
    INFECTIONRATE = 0.5;
    MORTALITYRATE = 0.4;
    HOSPITALMORTALITYRATE = 0.05;
    HOSPITALCAPACITY = 4;

    RECOVERYRATE = 0.01;
    HOSPITALRECOVERYRATE = 0.5;

    initialiseSim(p);
  };

  p.draw = function () {
    drawSimulation(p);
    if (simulationRunning) {
      runSimulation(p);
    }
  };
}

new p5(simulationSketch, "sim-canvas");
