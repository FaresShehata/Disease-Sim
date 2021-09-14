function moveAllPeople(p) {
  // This is executed every frame
  for (const person of people) person.move(p);
}

function drawAllPeople(p) {
  // This is executed every frame
  for (const person of people) person.draw(p);
}
