function findLongestWord(sentence) {
    const words = sentence.split(/\s+/);
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

console.log(findLongestWord("arererer rerer er ererer"));
