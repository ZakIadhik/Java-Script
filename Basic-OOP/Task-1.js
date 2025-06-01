const Student = {
    firstName: "Əli",
    lastName: "Məmmədov",
    age: 20,
    specialty: "Kompüter elmləri",
    course: 2,
}


function fullName(Student) {
    return Student.firstName + ' ' + Student.lastName
}

function graduate_year(Student) {
    const currentYear = new Date().getFullYear();
    const ostYears = 4;
    const remainingYears = ostYears - Student.course;
    return currentYear + remainingYears;
}

const res = fullName(Student);
console.log(res);

console.log(graduate_year(Student));


