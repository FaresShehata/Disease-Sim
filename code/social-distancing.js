function socialDistancing() {
  // This is executed every frame

  if (PARAMETERS.SOCIALDISTANCERADIUS === 0) return;
  // No social distancing if the parameter is 0

  // This nested loop ensures every pair of people is only compared once
  for (let i = 0; i < people.length - 1; i++) {
    if (people[i].state === DEAD || people[i].inHospital) continue;
    // Don't need to consider people dead or in hospital

    for (let j = i + 1; j < people.length; j++) {
      if (people[j].state === DEAD || people[j].inHospital) continue;

      const vec = p5.Vector.sub(people[i].pos, people[j].pos);
      // This gets a vector pointing from j to i

      const distSq = vec.magSq();
      /* using the distance squared here is more efficient than using the
      actual distance, as actual distance involves taking a square root,
      which is a relatively slow process */

      const r = PERSONRADIUS;
      const s = PARAMETERS.SOCIALDISTANCERADIUS;

      /* The if statement below is equivalent to
      if (dist < 2*r + 2*s*r) */
      if (distSq < 4 * r * r * (1 + 2 * s + s * s)) {
        const acc = vec.copy().setMag(SOCIALDISTANCESTRENGTH);
        /* acc is a vector pointing from j to i, but scaled to be the size of
        SOCIALDISTANCESTRENGTH */

        const possibleStates = [INFECTED, SEVERELYINFECTED];
        if (
          possibleStates.includes(people[i].state) ||
          possibleStates.includes(people[j].state)
        ) {
          acc.mult(SOCIALDISTANCEMULTIPLIER);
        }
        /* social distance strength will be stronger if either person
        shows symptoms, according to the parameter */

        personiAcc = acc.copy();
        personjAcc = acc.copy().mult(-1);
        // Person i and j accelerate in opposite directions

        people[i].acc.add(personiAcc);
        people[j].acc.add(personjAcc);
      }
    }
  }
}
