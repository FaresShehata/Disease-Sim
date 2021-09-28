function recovery(p) {
  // This is executed once every second

  for (const person of people) {
    const possibleStates = [ASYMP, INFECTED, SEVERELYINFECTED];
    if (!possibleStates.includes(person.state)) continue;
    // Only considering infected people

    if (!person.inHospital) {
      if (Math.random() < PARAMETERS.RECOVERYRATE) person.recover(p);
    } else {
      if (Math.random() < PARAMETERS.HOSPITALRECOVERYRATE) person.recover(p);
    }
    /* RECOVERYRATE and HOSPITALRECOVERYRATE are probabilities, so a random
    number between 0 and 1 is chosen and compared to the parameter. If the
    random number is less, then the person will recover. */
  }
}
