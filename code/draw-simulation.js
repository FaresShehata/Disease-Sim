function drawSimulation(p) {
  // This handles all the graphics of the simulation

  p.background(255);

  p.fill(255, 0);
  p.stroke(0);
  p.strokeWeight(5);
  p.rect(0, 0, p.width, p.height);
  // Drawing a border around the screen

  p.fill(255, 0);
  p.stroke(0);
  p.strokeWeight(2);
  p.rect(0, p.height - HOSPITALHEIGHT, HOSPITALWIDTH, HOSPITALHEIGHT);
  // Drawing the hospital

  drawAllPeople(p);

  p.fill(0);
  p.stroke(0, 0);
  p.textAlign(p.CENTER, p.TOP);
  p.textFont("helvetica");
  p.textSize(20);
  p.text("Hospital", HOSPITALWIDTH / 2, p.height - HOSPITALHEIGHT + 2);
  // Drawing the word "Hospital"
}
