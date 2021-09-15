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

    POPULATIONSIZE = 2;
    INITIALINFECTEDPOPULATION = 1;

    SOCIALDISTANCERADIUS = 4;

    INFECTIONRADIUS = 4;

    ASYMPPERIOD = 2;
    INFECTIONRATE = 1;
    MORTALITYRATE = 1;
    HOSPITALMORTALITYRATE = 1;

    initialiseSim(p);
  };

  p.draw = function () {
    p.background(255);
    currentFrame++;

    p.fill(255, 0);
    p.stroke(0);
    p.strokeWeight(5);
    p.rect(0, 0, p.width, p.height);

    p.fill(255, 0);
    p.stroke(0);
    p.strokeWeight(2);
    p.rect(0, p.height - HOSPITALHEIGHT, HOSPITALWIDTH, HOSPITALHEIGHT);

    moveAllPeople(p);
    drawAllPeople(p);
  };
}

new p5(simulationSketch, "sim-canvas");
