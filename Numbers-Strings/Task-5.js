function compareStrings(a, b) {
    return a.toLowerCase() === b.toLowerCase();
}

console.log(compareStrings("Hello", "hello")); // true
console.log(compareStrings("Привет", "прИВЕТ")); // true
