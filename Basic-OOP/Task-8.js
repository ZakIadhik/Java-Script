const textAnalyzer = {
    text: "",

    setText(newText) {
        this.text = newText
        return this;
    },


    letterCount() {
        return this.text.split("").filter(c => c !== " ").length
    },

    wordCount() {
        return this.text.split(" ").filter(word => word !== "").length
    },

    sentenceCount() {
        const marks = [".", "!", "?"]
        return this.text
            .split("")
            .filter(char => marks.includes(char)).length
    },

    longestWord() {
        return this.text.split(" ").reduce((longest, char) => char.length > longest.length ? char : longest, "")
    },

    wordFrequency() {
        const words = this.text.toLowerCase().replace(/[.,!?]/g, "").split(/\s+/)
        const freq = {}

        for (const word of words) {
            if (word){
                freq[word] = (freq[word] || 0) + 1
            }
        }
        return freq
    },

    mostFrequentWord() {
        const res = this.wordFrequency()
        return Object.entries(res).reduce((res, key) => {
            return key[1] > res[1] ? key : res
        }, ["", 0])[0]
    },

    averageWordLength() {
        const words = this.text
            .replace(/[.,!?]/g, "")
            .split(/\s+/)
            .filter(w => w !== "")

        const totalLength = words.reduce((sum, word) => sum + word.length, 0)
        return words.length === 0 ? 0 : totalLength / words.length
    },

    statistics() {
        return {
            letterCount: this.letterCount(),
            wordCount: this.wordCount(),
            sentenceCount: this.sentenceCount(),
            longestWord: this.longestWord(),
            averageWordLength: this.averageWordLength(),
            mostFrequentWord: this.mostFrequentWord(),
            wordFrequency: this.wordFrequency()
        };
    }
};


console.log(textAnalyzer.setText("Hello by my friend Hello world world world by by by"))
const stats = textAnalyzer.statistics()


console.log("Анализ текста:")
console.log("Букв (без пробелов):", stats.letterCount)
console.log("Слов:", stats.wordCount)
console.log("Предложений:", stats.sentenceCount)
console.log("Самое длинное слово:", stats.longestWord)
console.log("Средняя длина слова:", stats.averageWordLength.toFixed(2))
console.log("Самое частое слово:", stats.mostFrequentWord)
console.log("Частота слов:", stats.wordFrequency)