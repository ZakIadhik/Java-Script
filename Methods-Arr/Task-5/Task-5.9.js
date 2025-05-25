let arr = ["Anna", "Tom"]


function formStr(arr){
    return `Students: ${arr.join(', ')}`
}

const result = formStr(arr)
console.log(result)