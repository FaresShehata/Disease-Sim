function infectNewPeople() {
  // This is executed once every second

  console.log("infect new people");

  for (let i = 0; i < people.length; i++) {
    if (people[i].state != HEALTHY) continue;
    // Only considering healthy people for person i

    for (let j = 0; j < people.length; j++) {
      if (i === j) continue;
      // Don't want to compare a person to themselves

      const possibleStates = [ASYMP, INFECTED, SEVERELYINFECTED];
      if (!possibleStates.includes(people[j].state)) continue;
      // Only considering infected people for person j

      if (people[j].inHospital) continue;
      // People in hospital can't infect other people

      const vec = p5.Vector.sub(people[i].pos, people[j].pos);
      // This gets a vector pointing from person j to person i

      distSq = vec.magSq();
      /* using the distance squared here is more efficient than using the
      actual distance, as actual distance involves taking a square root,
      which is a relatively slow process */

      const r = PERSONRADIUS;
      const f = INFECTIONRADIUS;

      /* The if statement below is equivalent to
      if (dist < 2*r + 2*f*r) */
      if (distSq < 4 * r * r * (1 + 2 * f + f * f)) {
        if (Math.random() < INFECTIONRATE) people[j].infect(people[i]);
        /* INFECTIONRATE is a probability, so a random number between 0 and 1
        is chosen and compared to the parameter. If the random number is less,
        then person i will be infected by person j */
      }
    }
  }
}
