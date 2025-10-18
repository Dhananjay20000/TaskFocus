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
        console.log(this.name + " studies");
    }
    sleep() {
        console.log(this.name +  " sleeping");
        }
        eat() {
        console.log(this.name +  " eats");
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

const s1 = new Student("Lokesh", 103, 45, 8.8);
console.log(s1.name);
console.log(s1.id);
console.log(s1.age);
console.log(s1.cgpa);
s1.sleep();
s1.study();
s1.eat();

const stu = {
    name: "Annu",
    id: 201,
    age: 34,

    study : function() {
        console.log(stu.name + "Studies");
    },

    eat : function() {
        console.log(stu.name + "Eats");
    }
}

console.log(stu.name);
console.log(stu.id);
console.log(stu.age);
stu.study();
stu.eat();