class Person {
  constructor(p) {
    this.pos = p.createVector(0, 0);

    while (true) {
      this.pos.set(
        p.random(PERSONRADIUS, p.width - PERSONRADIUS),
        p.random(PERSONRADIUS, p.height - PERSONRADIUS)
      );

      if (
        this.pos.x > HOSPITALWIDTH + PERSONRADIUS ||
        this.pos.y < p.height - HOSPITALHEIGHT - PERSONRADIUS
      ) {
        break;
      }
    }
    /* The above loop ensures the person's initial position is not inside the
    hospital */

    this.vel = p5.Vector.fromAngle(p.random(p.TWO_PI), PERSONMAXSPEED);
    /* This gives the person a random direction to travel in, with a set max
    speed for all people */

    this.acc = p.createVector(0, 0);

    this.state = HEALTHY; // Global variable storing the string "h"

    this.inHospital = false;

    this.frameInfected = -1;
    // Default value for someone who has never been infected
  }

  move(p) {
    if (this.state === DEAD || this.inHospital) return;
    // People who are dead or in hospital don't move

    this.vel.add(this.acc);
    this.vel.limit(PERSONMAXSPEED);
    // Ensures the person does not exceed the maximum possible speed

    this.pos.add(this.vel);
    // Velocity updates position, acceleration updates velocity

    if (
      (this.pos.x < PERSONRADIUS &&
        this.pos.y < p.height - HOSPITALHEIGHT - PERSONRADIUS) ||
      this.pos.x > p.width - PERSONRADIUS
    ) {
      this.vel.x = -this.vel.x;
    } else if (
      this.pos.y > p.height - HOSPITALHEIGHT - PERSONRADIUS &&
      this.pos.x < HOSPITALWIDTH + PERSONRADIUS &&
      this.pos.x > HOSPITALWIDTH
    ) {
      this.pos.x = HOSPITALWIDTH + PERSONRADIUS;
      this.vel.x = -this.vel.x;
    }
    // Flipping a person's x direction if they collide with a vertical wall

    if (
      this.pos.y < PERSONRADIUS ||
      (this.pos.y > p.height - PERSONRADIUS &&
        this.pos.x > HOSPITALWIDTH + PERSONRADIUS)
    ) {
      this.vel.y = -this.vel.y;
    } else if (
      this.pos.x < HOSPITALWIDTH + PERSONRADIUS &&
      this.pos.y > p.height - HOSPITALHEIGHT - PERSONRADIUS &&
      this.pos.y < p.height - HOSPITALHEIGHT
    ) {
      this.pos.y = p.height - HOSPITALHEIGHT - PERSONRADIUS;
      this.vel.y = -this.vel.y;
    }
    // Flipping a person's y direction if they collide with a horizontal wall

    this.acc.mult(0.95);
    if (this.acc.magSq() < MINIMUMACC * MINIMUMACC) {
      this.acc.set(0, 0);
    }
    /* This ensures a person is not constantly accelerating once they come
    close to someone and need to social distance. The acceleration will
    decrease by 5% every frame until it becomes small enough, and it is set
    to 0. */
  }

  draw(p) {
    p.strokeWeight(0);
    switch (this.state) {
      case HEALTHY:
        p.fill(HEALTHYCOLOR);
        break;

      case ASYMP:
        p.fill(ASYMPCOLOR);
        break;

      case INFECTED:
        p.fill(INFECTEDCOLOR);
        break;

      case SEVERELYINFECTED:
        p.fill(SEVERELYINFECTEDCOLOR);
        break;

      case RECOVERED:
        p.fill(RECOVEREDCOLOR);
        break;

      case DEAD:
        p.fill(DEADCOLOR);
        break;
    }
    // Giving the person the correct colour based on their state

    p.ellipse(this.pos.x, this.pos.y, PERSONRADIUS);
  }

  infect(person) {
    person.state = ASYMP;
    person.frameInfected = currentFrame;
    // When a person is first infected, they are asymptomatic
  }

  becomeSicker() {
    if (this.state === ASYMP) {
      this.state = INFECTED;
    } else if (this.state === INFECTED) {
      this.state = SEVERELYINFECTED;
    }
  }

  die(p) {
    this.state = DEAD;
    this.acc.set(0, 0);
    this.vel.set(0, 0);
    /* All of the interaction between people will be handled in the main
    program, not in this method */

    if (this.inHospital) {
      this.inHospital = false;
      hospitalOccupancy--;

      while (true) {
        this.pos.set(
          p.random(PERSONRADIUS, p.width - PERSONRADIUS),
          p.random(PERSONRADIUS, p.height - PERSONRADIUS)
        );

        if (
          this.pos.x > HOSPITALWIDTH + PERSONRADIUS ||
          this.pos.y < p.height - HOSPITALHEIGHT - PERSONRADIUS
        ) {
          break;
        }
      }
    }
    /* When someone dies outside the hospital, they will be moved to a random
    location outside the hospital */
  }

  recover(p) {
    this.state = RECOVERED;

    if (this.inHospital) {
      this.inHospital = false;
      hospitalOccupancy--;

      while (true) {
        this.pos.set(
          p.random(PERSONRADIUS, p.width - PERSONRADIUS),
          p.random(PERSONRADIUS, p.height - PERSONRADIUS)
        );

        if (
          this.pos.x > HOSPITALWIDTH + PERSONRADIUS ||
          this.pos.y < p.height - HOSPITALHEIGHT - PERSONRADIUS
        ) {
          break;
        }
      }
    }
    /* When recovers dies outside the hospital, they will be moved to a random
    location outside the hospital */
  }

  goToHospital(p) {
    this.inHospital = true;
    this.acc.set(0, 0);

    this.pos.set(
      p.random(PERSONRADIUS, HOSPITALWIDTH - PERSONRADIUS),
      p.random(
        p.height - HOSPITALHEIGHT + PERSONRADIUS,
        p.height - PERSONRADIUS
      )
    );

    hospitalOccupancy++;
  }
}
