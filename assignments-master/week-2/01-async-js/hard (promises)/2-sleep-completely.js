/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const starttime = new Date().getTime()

    while(new Date().getTime() - starttime < milliseconds){
        // i am waiting to finish this call
    }
  return Promise.resolve(`wait over after ${milliseconds}  miliscond`)
}

sleep(5000).then((resolve)=>{
    console.log(resolve)
})
module.exports = sleep;
 