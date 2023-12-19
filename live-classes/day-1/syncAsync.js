// synchronouns funcation

// function sum(){
//     let ans=0;
//     for(let i=0;i<100;i++){
//         ans+=i
//     }
//     return ans
// }

// Asynchronous funcations

// function fetchData(){
//     console.log("Requesting data from ChatGpt Server...")

//     setTimeout(()=>{
//         console.log("Data retrived from ChatGpt Server")
//     },2000)

// console.log("I will print berofe data")
// }

// fetchData()


function fetchData() {
    setTimeout(() => {
        console.log("Data retrived from ChatGpt Server")
    }, 1000)

    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum = sum + i
    }
    console.log("Testing")
}

fetchData()