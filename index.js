const coinclicker = document.getElementById("coinclicker")
const coinslabel = document.getElementById("coinslabel")
const gemclicker = document.getElementById("gemclicker") 
const gemslabel = document.getElementById("gemslabel")
let coins = 0
let gems = 0
coinclicker.addEventListener("click", () => {
  coins++
  coinslabel.innerText = "Coins: " + coins
})
gemclicker.addEventListener("click", () => {
   gems++
   gemslabel.innerText = "gems:" + gems
} )