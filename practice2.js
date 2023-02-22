// pr1.........
const ar1 = [1, 3, 7, 9];
const even = ar1.map(x => x + 1);
console.log(even);

// pr2..........
const ar2 = [12, 3, 60, 2, 30, 10, 87, 90];
const div = ar2.filter(x => x % 10 === 0);
console.log(div);

// pr3............
const ar3 = [12, 3, 60, 2, 30, 10, 87, 90];
const div2 = ar3.find(x => x % 10 === 0);
console.log(div2);

// pr4.............
const add = ar3.reduce((sum, c) => sum + c, 0)
console.log(add);

// pr5.............
const ar4 = [
    { name: 'Rajib', age: 30 },
    { name: 'Rina', age: 29 },
    { name: 'Haoa', age: 31 },
    { name: 'Noor', age: 32 },
];

const ageSum = ar4.reduce((c, x) => x.age + c, 0);
console.log(ageSum);
// pr5.............
const obj = Object.assign(ar4[0]);
console.log(obj.age);

// pr6.............
const data = {
    student: [
        {
            name: 'Rajib',
            age: 30,
            city: 'Dhaka'
        },
    ]
}

console.log(data.student[0].city)

// pr5.............
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);

const empty = ar1.filter

const ar6 = [2, 0, 9, 3, 1];
for(const emt in ar6){
    ar6.pop();
}

console.log(ar6);