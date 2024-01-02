/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise First resolved")
        }, t)
    })

}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise second Resovled")
        }, t)
    })
}

function wait3(t) {
    return new Promise(function (resolve) {
        setInterval(function () {
            resolve("Promise 3rd resolve")
        }, t)
    })
}

function calculateTime(t1, t2, t3) {
    const before = new Date().getTime()
Promise.all([wait1(2000),wait2(5000),wait3(1000)])
.then((res)=>{
    console.log("all promise Resolved"+ res)

    const after = new Date().getTime()
    console.log(`Total ${after-before} second time take all promise to resloved `)
})
}

module.exports = calculateTime;
