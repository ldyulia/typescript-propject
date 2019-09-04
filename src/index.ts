interface Human {
  name: string;
  gender: string;
  age: number;
}

const person = {
  name: "Yulia",
  gender: "female",
  age: 22
};

const sayHi = (potato: Human): string => {
  return `Hello ${potato.name}, you are ${potato.age}, you are a ${potato.gender}!`;
};

console.log(sayHi(person));

//위와 같이 interface를 이용할 수도 있고(typescript에서만 가능) javascript에서도 이용하고 싶다면
//아래와 같이 class를 이용하면 된다

class Sims {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const Person2 = new Sims("Yulia2", 31, "They");

console.log(sayHi(Person2));

export {};
