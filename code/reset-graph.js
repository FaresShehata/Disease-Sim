function resetGraph(p) {
  plot.getLayer("healthy").setLineColor(p.color(COLORS.HEALTHYCOLOR));
  plot.getLayer("asymp").setLineColor(p.color(COLORS.ASYMPCOLOR));
  plot.getLayer("infected").setLineColor(p.color(COLORS.INFECTEDCOLOR));
  plot
    .getLayer("severelyInfected")
    .setLineColor(p.color(COLORS.SEVERELYINFECTEDCOLOR));
  plot.getLayer("recovered").setLineColor(p.color(COLORS.RECOVEREDCOLOR));
  plot.getLayer("dead").setLineColor(p.color(COLORS.DEADCOLOR));

  plot.setYLim(0, PARAMETERS.POPULATIONSIZE);

  simulationState = [];
  // Resetting the simulation state

  healthyPoints = [];
  asympPoints = [];
  infectedPoints = [];
  severelyInfectedPoints = [];
  recoveredPoints = [];
  deadPoints = [];
  // Clearing the points arrays

  storeCurrentState();
  // Store the initial state of the simulation

  drawGraph(p);
}
