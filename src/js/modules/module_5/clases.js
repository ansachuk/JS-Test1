class user {
  constructor({ name, age, gender, email, hobbies }) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.hobbies = hobbies;
  }

  getInfo() {
    return `${this.name} is ${this.gender}, ${this.age} years old user.`;
  }

  getHobbies() {
    return this.hobbies;
  }

  addHobbie(hobbie) {
    this.hobbies.push(hobbie);
  }
}

const an = new user({
  name: "An Sachuk",
  age: 20,
  gender: "male",
  email: "ansachuk.icloud.com",
  hobbies: ["american football", "reading", "JavaScript"],
});

console.log(an);

console.log(an.getHobbies());
console.log(an.getInfo());

an.addHobbie("html");
console.log(an.getHobbies());

const masha = new user({
  name: "Masha Danilenko",
  age: 19,
  gender: "female",
  email: "danilenkkooo@icloud.com",
  hobbies: [],
});

console.log("         ");

console.log(masha);

masha.addHobbie("UX/UI");

console.log(masha.getInfo());

console.log(masha.getHobbies());
