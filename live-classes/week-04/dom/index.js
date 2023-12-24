
function sum() {
    const a = document.getElementById("firstNumber").value;
    const b = document.getElementById("secondNumber").value;
    const element = document.getElementById("final-sum")
    // element.innerHTML=parseInt(a) + parseInt(b)
    fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)

}
