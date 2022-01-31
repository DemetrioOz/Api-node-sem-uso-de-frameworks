class Hero {
  constructor({ id, name, age, power }) {
    this.id = Math.floor(Math.random() * 100) + Date.now();
    this.name = name;
    this.age = age;
    this.power = power;
  }

  isValid() {
    const proprietaryName = Object.getOwnPropertyNames(this);
    const amountInvalid = proprietaryName
      .map((propriety) =>
        !!this[propriety] ? null : `${propriety} is missing`
      )
      .filter((item) => !!item);

    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid,
    };
  }
}

module.exports = Hero;

// const hero = new Hero({ name: "teste", power: "cuie" });
// console.log("valid", hero.isValid());
// console.log("valid", hero);
