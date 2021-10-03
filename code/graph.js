let healthyPoints = [];
let asympPoints = [];
let infectedPoints = [];
let severelyInfectedPoints = [];
let recoveredPoints = [];
let deadPoints = [];

let plot;

let graphStart = false;

let graphDraw = false;

let graphSave = false;

function graphSketch(p) {
  p.setup = function () {
    const width = p.windowWidth / 2 - 3 * 25;
    const height = 13 * 25;
    p.createCanvas(width, height);

    plot = new GPlot(p);
    plot.setDim(width - 80, height - 80);
    plot.setPos(-10, -20);
    plot.getXAxis().setAxisLabelText("Days");
    plot.getYAxis().setAxisLabelText("No. People");
    plot.getYAxis().setRotateTickLabels(false);

    plot.addLayer("healthy", []);
    plot.addLayer("asymp", []);
    plot.addLayer("infected", []);
    plot.addLayer("severelyInfected", []);
    plot.addLayer("recovered", []);
    plot.addLayer("dead", []);

    drawGraph(p);
  };

  p.draw = function () {
    if (graphStart) {
      resetGraph(p);
      graphStart = false;
    }

    if (graphDraw) {
      graphDraw = false;
      drawGraph(p);
    }

    if (graphSave) {
      p.saveCanvas("simulation-graph", "jpg");
      graphSave = false;
    }
  };
}

// if (p.frameCount % 60 === 0) {
// healthyPoints.push(new GPoint(i, p.random(0, 100), "hi"));
// plot.setPoints(healthyPoints);
// plot.setXLim(0, healthyPoints[healthyPoints.length - 1].getX());
// i++;
// plot.setYLim(
//   0,
//   healthyPoints.reduce((max, curr) => {
//     return max.getY() > curr.getY() ? max.getY() : curr.getY();
//   })
// );
// }

new p5(graphSketch, "graph-canvas");
