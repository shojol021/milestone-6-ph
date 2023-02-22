// pr1

const multiply = (a, b, c) => a*b*c;
console.log(multiply(2,8,6));

// pr2

const add = (a, b = 2) => a + b;
console.log(add(9));

// pr3

let i= 0; let newAr = []; 
const frnds = (ar) => {
    for(const el of ar){
        const name = ar[i];
        if(name.length % 2 === 0){
            newAr.push(name);
        }
        i++;
    }
    return newAr;
}

const inp = ['anowar', 'sanowar', 'manowar', 'junior', 'adnan', 'siddik', 'khokon'];
console.log(frnds(inp));


// pr4
let sum = 0;
const sq = ar => {
    for(const el of ar){
        sum = sum + el*el
    }
    return sum/ar.length;
}

const numbers = [1,2,3,6,7];
console.log(sq(numbers));

const total = numbers.reduce((pre, cur) => (cur*cur + pre), 0);
console.log(total);

// pr5

const fun = (a, b) => {
    const oooo = [...a, ...b]
    return Math.max(...oooo);
}

const p1 = [12, 1, 8 , 9]
const p2 = [2, 11, 3 , 0]
console.log(fun(p1, p2));

// pr6

const ob = {a: 2, b: 6, c: 0, d: 'adnan', e: 9};
const {a, b, ...z} = ob;

console.log(a);
console.log(b);
console.log(z);

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

const {price} = product;

console.log(price);