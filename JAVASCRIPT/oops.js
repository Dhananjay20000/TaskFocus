class Student {
    name = "Gamana"
    id = 101
    age = 24 
    cgpa = 7.9

    //behaviours
    study() {
        console.log("Student studies");
    }
    sleep() {
        console.log("Student  sleeping");
        }
        eat() {
        console.log("Student  eats");
        }
    }
//object creation
const s = new Student();
console.log(s.name);
console.log(s.id);
console.log(s.age);
console.log(s.cgpa);
s.sleep();
s.study();
s.eat();