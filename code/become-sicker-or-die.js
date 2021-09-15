function becomeSickerOrDie(p) {
  // This is executed once every second

  for (const person of people) {
    const possibleStates = [ASYMP, INFECTED, SEVERELYINFECTED];

    if (!possibleStates.includes(person.state)) continue;
    /* If someone is not asymptomatic, infected, or severely infected, go the
    next person */

    if (person.state === ASYMP) {
      const time = currentFrame - person.frameInfected;
      if (time >= 60 * ASYMPPERIOD) person.becomeSicker();
      /* The ASYMPPERIOD parameter is the number of seconds(days) a person is
      asymptomatic for, so it is multiplied by 60 to get the frame
      equivalent, as there are 60 frames per second */
    } else if (person.state === INFECTED) {
      if (Math.random() < INFECTIONRATE) person.becomeSicker();
      /* INFECTIONRATE is a probability, so a random number between 0 and 1
      is chosen and compared to the parameter. If the random number is less,
      then the person will become sicker. */
    } else if (person.state === SEVERELYINFECTED && !person.inHospital) {
      if (Math.random() < MORTALITYRATE) person.die(p);
      //
    } else if (person.state === SEVERELYINFECTED && person.inHospital) {
      if (Math.random() < HOSPITALMORTALITYRATE) person.die(p);
    }
  }
}
