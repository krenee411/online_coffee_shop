
var cupcake = document.getElementById("cupcake");
var latte = document.getElementById("latte");
var cookie = document.getElementById("cookie");
var cost = document.getElementById("cost");
var total = document.getElementById("total");

cost.addEventListener("click", getTotal)
    

function getTotal(event){
    event.preventDefault()
    total.innerHTML = latte.value * 3 + cookie.value * 1 + cupcake.value * 2 + "$"
    latte.value = "" 
    cookie.value = "" 
    cupcake.value = ""
}
