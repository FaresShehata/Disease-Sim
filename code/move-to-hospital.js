function moveToHospital(p) {
  // This is executed once every second

  for (const person of people) {
    if (hospitalOccupancy >= PARAMETERS.HOSPITALCAPACITY) return;
    // Ending the function if the hospital is full

    if (person.state === SEVERELYINFECTED && !person.inHospital)
      person.goToHospital(p);
    /* hospitalOccupancy variable is incremented inside the goToHospital
    method */
  }
}
