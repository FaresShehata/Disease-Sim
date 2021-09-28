function infectiousPeriodRecovery(p) {
  // This is executed once every second

  for (const person of people) {
    const possibleStates = [ASYMP, INFECTED, SEVERELYINFECTED];
    if (!possibleStates.includes(person.state)) continue;
    // Only considering infected people

    const time = currentFrame - person.frameInfected;
    if (time >= 60 * PARAMETERS.INFECTIOUSPERIOD) person.recover(p);
    /* The INFECTIOUSPERIOD parameter is the number of seconds(days) a person
    can be infected for, so it is multiplied by 60 to get the frame
    equivalent, as there are 60 frames per second */
  }
}
