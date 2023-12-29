

function getTime(){
    const date = new Date()
    console.log(date.getHours() + ":"+date.getMinutes() + ":"+date.getSeconds()+ date.toLocaleString().slice(19,22))
  }
  setInterval(()=>{
  getTime()
  },1000)
  