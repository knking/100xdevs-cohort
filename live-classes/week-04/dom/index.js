
function sum() {
    const val1 = document.getElementById("firstNumber").value;
    const val2 = document.getElementById("secondNumber").value;
    const btn = document.getElementById("btn")
    let ans = parseInt(val1) + parseInt(val2)
    let newElement =document.createElement("div")
    newElement.innerHTML=ans
    document.body.appendChild(newElement)
}
