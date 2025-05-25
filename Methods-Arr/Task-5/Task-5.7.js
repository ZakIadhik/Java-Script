let arr = [1,2,3,4,5,6,7,8,9,10]

function podArray(arr , size){
    const newArr = []
    for(let i=0; i < arr.length; i += size){
        const temp = arr.slice(i , i + size );
        newArr.push(temp)
    }
    return newArr
}

const result = podArray(arr,3)

console.log(result)