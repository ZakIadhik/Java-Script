let str = "This is a test"


function countVowels(str){
    const vowels = 'aeiou'
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length
}

const res = countVowels(str)
console.log(res)