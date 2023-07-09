export default class Person {
  name;
  age;
  constructor(name, age) {
    // super();
    this.name = name;
    this.age = age;
  }
  getName() {
    return name;
  }

  setAge(age) {
    this.age = age;
  }

  getAge() {
    return age;
  }

  setName(name) {
    this.name = name;
  }
}
