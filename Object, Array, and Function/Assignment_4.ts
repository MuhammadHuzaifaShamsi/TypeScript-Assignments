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

// Answering to the question asked:
// Can you guess why this information might be helpful?
// ANS:
// 1. Senoirs who have completed the assignments should be highlighted amongst others so that the young
//    generation can be motivated and these seniors can become role models for them !
// 2. This can help administration to keep track of which senior is performing well !


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

// Can you think of any reasons why this might be useful (consider limitations)?
// ANS:
// By removing seniors who have not completed the assignments can help in ways like:
// 1. the teachers can focus on the students who are serious about their future and studies.
//    this helps increase overall class performance.
// 2. This sets clear standard for the upcoming generation that if you also don't complete your assignments 
//    you too will be eliminated !! 
