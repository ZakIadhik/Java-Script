function calc(str) {
    try {return eval(str);}    catch {return "Error in expression";}
}

console.log(calc("2+3"));       
console.log(calc("10/2+7*2"));
