function initialiseSim(p) {
  // This is executed when the start button is pressed

  currentFrame = 0; // Resetting the frame counter

  people = [];
  for (let i = 0; i < PARAMETERS.POPULATIONSIZE; i++)
    people.push(new Person(p));
  // Filling the population array with the set amount of people

  for (let i = 0; i < PARAMETERS.INITIALINFECTEDPOPULATION; i++)
    people[i].infect(people[i]);
  /* Initialising the initial infected population. Even though all the
  infected people are at the beginning of the array, all people have
  randomised positions. */

  hospitalOccupancy = 0; // Resetting hospital occupancy to 0.

  simulationRunning = true;
  /* If false, the simulation will not run, but the main loop will still be
  running.*/
}
