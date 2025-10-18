//parent class 
class employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
    }

    skillsInfo() {
        console.log(`${this.name}'s , Skills: ${this.skillsInfo.join}(", ")}`);
    }
     
}

//Child class Developer
class Developer extends Employee {
    constructor(name, id, salary, skills) {
        super(name, id, salary); //call parent constructor
        this.skills = skills;   
    }
    skillsInfo() {
        console.log(`${this.name}'s Skills: ${this.skills.join(", ")}`);
    }
    project(projectName) {
        console.log(`${this.name} is working on project: ${projectName}`);
    }
    
}

//Child class Tester
class Tester extends Employee {
    constructor(name, id, salary, tools) {
        super(name, id, salary);
        this.tools = tools;
    }
    skillsInfo() {
        console.log(`${this.name} teste using: ${this.tools.join(", ")}`);
    }
    project(projectName) {
        console.log(`${this.name} is testing project: ${projectName}`);
    }
}