// 1.Create a counter in Javascript (counts down from 30 to 0)

// let countdown = 30;

// function startCountdown() {
//     const intervalId = setInterval(function () {
//         console.log(countdown);

//         if (countdown === 0) {
//             clearInterval(intervalId); // Stop the countdown when it reaches 0
//             console.log("Countdown reached 0. Time's up!");
//         } else {
//             countdown--;
//         }
//     }, 1000); // Update every 1000 milliseconds (1 second)
// }

// // Start the countdown
// startCountdown();


// // 2. Calculate the time it takes between a setTimeout call and the inner function actually running

// // Record the start time
// const startTime = Date.now();

// // Call setTimeout with a delay of 2000 milliseconds (2 seconds)
// setTimeout(function () {
//     // Calculate the time elapsed
//     const elapsedTime = Date.now() - startTime;

//     // Log the result
//     console.log(`Time elapsed: ${elapsedTime} milliseconds`);
// }, 1000);


// 3. Create a terminal clock (HH:MM:SS)

const date = new Date()

const hh=date.getHours()
const mm=date.getMinutes()
const ss=date.getSeconds()
console.log(hh+":"+mm+":"+ss)

// Create a new Date object with the current date and time
const currentDate = new Date();

console.log(`Formatted Date in IST: ${formattedDate}`);