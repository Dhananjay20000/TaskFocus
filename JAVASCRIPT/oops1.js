class Student {
    name;
    id;
    age;
    cgpa;

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
const s = new Student();
s.name = "Anu";
s.id = 104;
s.age = 24;
s.cgpa = 7.8;
console.log(s.name);
console.log(s.id);
console.log(s.age);
console.log(s.cgpa);
s.sleep();
s.study();
s.eat();