// Assignment 4: Student List Organizer

interface Student {
    name: string;
    seniorStatus: boolean;
    taskCompleted: boolean;
}

let students: Student[] = [
    {
        name: "Huzaifa",
        seniorStatus: true,
        taskCompleted: false
    },
    {
        name: "Muzamil",
        seniorStatus: true,
        taskCompleted: true
    },
    {
        name: "Ayaan",
        seniorStatus: false,
        taskCompleted: true
    }
];

let checkTaskForSeniors = (student: Student[]) => {
    for (let i = 0; i < student.length; i++) {
        if (student[i].seniorStatus && student[i].taskCompleted) {
            console.log(`Student: ${student[i].name} is a Senior and have completed the Assignments !`);
        }
    } 
}

checkTaskForSeniors(students)



let removeSenior = (student: Student[]) => {
    for (let i = student.length - 1; i >= 0; i--) {
        if (student[i].seniorStatus && !(student[i].taskCompleted)) {
            console.log(`\nStudent: ${student[i].name} is a senior and haven't completed the assignments !`)
            students.splice(i, 1);
        }
    } 
}

removeSenior(students)
console.log(students)