// Global variables
let POPULATIONSIZE,
  INITIALINFECTEDPOPULATION,
  INFECTIONRADIUS,
  INFECTIONRATE,
  RECOVERYRATE,
  MORTALITYRATE,
  HOSPITALCAPACITY,
  HOSPITALRECOVERYRATE,
  HOSPITALMORTALITYRATE,
  SOCIALDISTANCERADIUS,
  ASYMPPERIOD,
  INFECTIOUSPERIOD;

const HEALTHY = "h";
const ASYMP = "a";
const INFECTED = "i";
const SEVERELYINFECTED = "s";
const RECOVERED = "r";
const DEAD = "d";

let HEALTHYCOLOR,
  ASYMPCOLOR,
  INFECTEDCOLOR,
  SEVERELYINFECTEDCOLOR,
  RECOVEREDCOLOR,
  DEADCOLOR;

let HOSPITALWIDTH, HOSPITALHEIGHT;

const PERSONRADIUS = 10;

const PERSONMAXSPEED = 10;

const MINIMUMACC = 10;

const SOCIALDISTANCESTRENGTH = 10;

let people = [];

let currentFrame = 0;

let hospitalOccupancy = 0;

let simulationRunning = false;

function simulationSketch(p) {
  p.setup = function() {
    const width = (p.windowWidth / 2) - 3 * 25;
    const height = 13 * 25;
    p.createCanvas(width, height);
  };

  p.draw = function() {
    p.background(255);
    p.fill(0);
    p.ellipse(250, 250, 100);
  };
}

new p5(simulationSketch, "sim-canvas");
