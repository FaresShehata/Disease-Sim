function drawGraph(p) {
  p.background(255);

  p.fill(255, 0);
  p.stroke(0);
  p.strokeWeight(5);
  p.rect(0, 0, p.width, p.height);
  // Drawing a border around the screen

  plot.beginDraw();

  plot.drawBox();
  plot.drawXAxis();
  plot.drawYAxis();
  plot.drawTitle();

  plot.drawFilledContours(GPlot.HORIZONTAL, 0);
  // Makes the graph fill downwards
  plot.setXLim(0, healthyPoints.length - 1);
  plot.getXAxis().setNTicks(healthyPoints.length - 1);

  plot.getLayer("healthy").setPoints(healthyPoints);
  plot.getLayer("asymp").setPoints(asympPoints);
  plot.getLayer("infected").setPoints(infectedPoints);
  plot.getLayer("severelyInfected").setPoints(severelyInfectedPoints);
  plot.getLayer("recovered").setPoints(recoveredPoints);
  plot.getLayer("dead").setPoints(deadPoints);
  // Updating the layers with their points

  plot.drawLegend(
    [
      "",
      "Healthy",
      "Asymptomatic",
      "Infected",
      "Severely Infected",
      "Recovered",
      "Dead",
    ],
    [999, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04],
    [999, 0.95, 0.85, 0.75, 0.65, 0.55, 0.45]
  );

  plot.endDraw();
}
