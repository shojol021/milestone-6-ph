class Student{
    name;
    age;
    id;
    location;
    school = 'MGHS';
    subject(sub){
        console.log(`${this.name} Subject is ${sub}`)
    }
    constructor(n, a, id, loc){
        this.name = n;
        this.age = a;
        this.id = id;
        this.location = loc;
    }
}

class ScienceStudent extends Student{
    classRoomNo;
    group = 'Science';
    subjects = 'math, physics, chemistry';
    project;
    constructor(n, a, id, loc, cls, proj){
        super (n, a, id, loc)
        this.classRoomNo = cls;
        this.project = proj;
    }
}

class BusinessStudent extends Student{
    group = 'Business';
    subjects = 'Accounting, Managment, Statistics';
    research;
    constructor(n, a, id, loc, res){
        super (n, a, id, loc)
        this.research = res;
    }
}

const shipa = new ScienceStudent('Shipa Akter', 23, 17, 'Russia', '8', 'development');
console.log(shipa);

const Amir = new BusinessStudent('Aamir Khan', 30, 7, 'Pakisatn', 'nothing')