const users = {
    "user1": { name: "Ali", age: 25, city: "Baku", salary: 1500 },
    "user2": { name: "Leyla", age: 30, city: "Ganja", salary: 1800 },
    "user3": { name: "Rashad", age: 28, city: "Baku", salary: 2000 },
    "user4": { name: "Nigar", age: 35, city: "Sumgait", salary: 2200 },


};


function toArray(users) {
    return Object.values(users)
}

function groupBy(users){
    return users.reduce((acc, user) => {
        const key = user.city
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(user)
        return acc;
    }, {})
}

function arifmet(users){
    const userArray = toArray(users)
    const total = userArray.reduce((acc, user) => acc + user.salary, 0)
    return total / userArray.length;

}

function highSalary(users) {
    const userArray = toArray(users)
    return userArray.reduce((max, user) => user.salary > max ? user.salary : max, 0 )
}

function bigBoy(users) {
    const userArray = toArray(users)
    return userArray.filter(user => user.age < 30)
}

function nameBigSalary(users) {
    const userArray = toArray(users)
    return userArray.filter(user => user.salary > 1800)
}

const res = nameBigSalary(toArray(users));
console.log(res);





