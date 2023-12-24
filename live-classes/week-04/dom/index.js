
// function sum() {
//     const a = document.getElementById("firstNumber").value;
//     const b = document.getElementById("secondNumber").value;
//     const element = document.getElementById("final-sum")
//     // element.innerHTML=parseInt(a) + parseInt(b)
//     fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
//     .then(function(response){
//         response.text()
//         .then(function(ans){
//             element.innerHTML=ans
//         })
//     })

// }

async function sum2(){
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;
    const element = document.getElementById("final-sum")
    
    const response = await  fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    const ans = await response.text()
    element.innerHTML=ans
}