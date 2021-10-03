function updatePointsArrays() {
  for (let day = 0; day < simulationState.length; day++) {
    let counts = {
      h: 0,
      a: 0,
      i: 0,
      s: 0,
      r: 0,
      d: 0,
    };

    for (const state of simulationState[day]) {
      counts[state] += 1;
    }
    // Getting how many of each state for the day

    let sum = 0;
    healthyPoints[day] = new GPoint(day, PARAMETERS.POPULATIONSIZE);
    sum += counts[HEALTHY];

    asympPoints[day] = new GPoint(day, PARAMETERS.POPULATIONSIZE - sum);
    sum += counts[ASYMP];

    infectedPoints[day] = new GPoint(day, PARAMETERS.POPULATIONSIZE - sum);
    sum += counts[INFECTED];

    severelyInfectedPoints[day] = new GPoint(
      day,
      PARAMETERS.POPULATIONSIZE - sum
    );
    sum += counts[SEVERELYINFECTED];

    recoveredPoints[day] = new GPoint(day, PARAMETERS.POPULATIONSIZE - sum);
    sum += counts[RECOVERED];

    deadPoints[day] = new GPoint(day, PARAMETERS.POPULATIONSIZE - sum);

    /* creating the GPoints for each state, in order from top to bottom on the
    graph. The top layer is the "furthest back", so this will recreate the
    look of an area chart. */
  }
}
