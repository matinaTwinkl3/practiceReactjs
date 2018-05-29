class Person {
  constructor(name, age) {
    //or use age = 0 in construstor para meters
    this.Name = name;
    this.Age = age || 0;
  }
  getDescription() {
    return this.Name + ' is ' + this.Age + ' year(s) old';
  }
}

class Traveler extends Person {
  constructor(name, age, address='pokhara') {
    super(name, age);
    this.address = address;
  }
  hasLocation() {
    return !!this.address;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasLocation()) {
      description = description + '. Their address is ' +this.hasLocation();
    }
    return description;
  }
}

const me = new Traveler('Matina', '25', 'ktm');
console.log(me.getDescription());

const you = new Traveler('She');
console.log(you.getDescription());
