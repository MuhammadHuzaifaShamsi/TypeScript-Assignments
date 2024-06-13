// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

async function fetchGreeting() {
    setTimeout(()=> console.log("Hey there!"), 2000);
}

fetchGreeting();


// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

function simulateTask(){
    console.log("Task started");
    setTimeout(() => console.log("Task completed"), 1000);
}

simulateTask();


// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.

function fetchData(){
    return new Promise((res, rej) => {
        setTimeout(() => res("Data fetched successfully!"), 1000);
    });
}

fetchData().then((response) => console.log(response)).catch((error) => console.error(error));


// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

function fetchWithError() {
    return new Promise((res, rej) => {
        setTimeout(() => rej("Data fetch failed!"), 1000);
    });
}
fetchWithError().then((response) => console.log(response)).catch((error) => console.log(error));


// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

function fetchDataForQuestion5() {
    return new Promise((res, rej) => {
        res("Data fetched successfully!");
    });
}

function processData() {
    return new Promise((res, rej) => {
        rej(`Data processing Failed!`);
    });
}

function executeSequentially() {
    fetchDataForQuestion5().then((data) => {
        console.log(data);
        return processData();
    }).then((processedData) => console.log(processedData))
    .catch((error) => console.error(error));
}


executeSequentially();