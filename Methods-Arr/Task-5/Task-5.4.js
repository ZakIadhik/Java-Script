let arr = ["Anna", "John", "Doe"]


function typeObj(arr){
    return arr.reduce((acc, name) => ({...acc, [name[0].toUpperCase()]: [...(acc[name[0].toUpperCase()] || []), name]}), {});
}

const result = typeObj(arr)
console.log(result)