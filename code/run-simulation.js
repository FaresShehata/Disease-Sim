function runSimulation(p) {
  // This is the logic of running the simulation

  currentFrame++;
  // Increment the frame counter

  let infectedCount = 0;
  for (const person of people) {
    const possibleStates = [ASYMP, INFECTED, SEVERELYINFECTED];
    if (possibleStates.includes(person.state)) infectedCount++;
  }
  if (infectedCount === 0) simulationRunning = false;
  // Stopping the simulation if there are no more infected people

  moveAllPeople(p);

  socialDistancing();
  /* This causes people to social distance from each other according to the
  SOCIALDISTANCERADIUS parameter */

  if (currentFrame % 60 === 0) {
    becomeSickerOrDie(p);
    /* This causes infected people to either become sicker or die according
    to INFECTIONRATE and MORTALITYRATE/HOSPITALMORTALITYRATE parameters. It
    also causes asymptomatic people to become "INFECTED" after their
    asymptomatic period ends */

    infectiousPeriodRecovery(p);
    /* This causes infected people who have been infected for the infectious
    period to recover */

    recovery(p);
    /* This causes infected people to recover according to the RECOVERYRATE /
    HOSPITALRECOVERYRATE parameters */

    moveToHospital(p);
    /* This causes severely infected people to be moved to the hospital if
    there is capacity */

    infectNewPeople();
    /* This causes infected people to be able to infect healthy people that
    are within the INFECTIONRADIUS and according to the INFECTIONRATE */
  }
}
