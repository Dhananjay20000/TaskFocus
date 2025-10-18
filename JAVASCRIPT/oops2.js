class Student {
    //costructor
    constructor(name, id, age, cgpa) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.cgpa = cgpa;
}

    //behaviours
    study() {
        console.log(s.name + " studies");
    }
    sleep() {
        console.log(s.name +  " sleeping");
        }
        eat() {
        console.log(s.name +  " eats");
        }
    }
//object creation
const s = new Student("Aishwarya", 104, 25, 7.8);
console.log(s.name);
console.log(s.id);
console.log(s.age);
console.log(s.cgpa);
s.sleep();
s.study();
s.eat();