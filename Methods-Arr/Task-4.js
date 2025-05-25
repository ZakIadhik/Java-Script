let arr1 = ['Anna','Tom','John']

let arr2 = ['Anna','John']


function getMessagesForBestStudents(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return null
    }

    const passedStudents = arr1.filter(name => arr2.includes(name))
    return passedStudents.map(name => `Good job, ${name}`)
}

let result = getMessagesForBestStudents(arr1, arr2)
console.log(result)