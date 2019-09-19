// CODE here for your Lambda Classes


class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}; // ends Person


class Instructor extends Person {
    constructor(instructAttrs) {
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject.favLanguage}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject.favSubjects}.`;
    }
}; // ends Instructor


class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel.className}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject.favSubjects}.`;
    }
}; // ends ProjectManager


class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}.`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject.className}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject.favSubjects}.`;
    }
}; // ends Student





//  === INSTRUCTOR OBJECTS ===

const fred = new Instructor ({
    name: "Fred",
    age: 37,
    location: "Bedrock",
    specialty: "Front-end",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies"
});

const tim = new Instructor ({
    name: "Tim",
    age: 32,
    location: "New York",
    specialty: "Back-end",
    favLanguage: "Node.js",
    catchPhrase: "Forget those homies"
});


//  === PROJECT MANAGER OBJECTS ===

const sally = new ProjectManager ({
    name: "Sally",
    age: 28,
    location: "Texas",
    gradClassName: "Web16",
    favInstructor: "Tim"
});

const joe = new ProjectManager ({
    name: "Joe",
    age: 26,
    location: "North Dakota",
    gradClassName: "Web18",
    favInstructor: "Fred"
});


//  === STUDENT OBJECTS ===

const mike = new Student ({
    name: "Mike",
    age: 24,
    location: "Florida",
    previousBackground: "college student",
    className: "Web24",
    favSubjects: "JavaScript and React"
});

const pam = new Student ({
    name: "Pam",
    age: 38,
    location: "North Dakota",
    previousBackground: "skydive instructor",
    className: "Web24",
    favSubjects: "HTML, CSS, and JavaScript"
});





console.log(fred.demo(fred));
console.log(tim.speak());
console.log(sally.standUp(mike));
console.log(joe.debugsCode(mike, mike));
console.log(mike.listsSubjects());
console.log(pam.sprintChallenge(pam));