function cal (num1, num2, operation){
    if (operation === 'add' || operation === 'sum'){
        add(num1, num2);
    }
    else if (operation === 'sub'){
        sub(num1, num2);
    }
    else if (operation === 'mul'){
        mul(num1, num2);
    }
    else if (operation === 'div'){
        div(num1, num2);
    }

    else{
        console.log('please give a correct input')
    }
}

function add(num1, num2){
    const result = num1 + num2;
    console.log(result);
}
function sub(num1, num2){
    const result = num1 - num2;
    console.log(result);
}
function mul(num1, num2){
    const result = num1 * num2;
    console.log(result);
}
function div(num1, num2){
    const result = num1 / num2;
    console.log(result);
}

// cal(12, 3, 'mul');
// ==================================

function cal(num1, num2, operation) {
    const operations = {
      'add': (a, b) => a + b,
      'sum': (a, b) => a + b,
      'sub': (a, b) => a - b,
      'mul': (a, b) => a * b,
      'div': (a, b) => a / b
    };
  
    const op = operations[operation];
    console.log(op);
  
    if (op) {
      const result = op(num1, num2);
      console.log(result);
    } else {
      console.log('please give a correct input');
    }
  }
  
  cal(12, 3, 'div');
  