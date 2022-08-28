let images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

document.querySelector(".btn").addEventListener("click",function(){
    let num1 = Math.floor(Math.random()*6)
    let num2 = Math.floor(Math.random()*6)
    if(num1===num2){
        document.querySelector("h1").textContent="Draw!"
    }
    else if(num1>num2){
        document.querySelector("h1").textContent="🚩Player 1 Wins!"
    }
    else{
        document.querySelector("h1").textContent="Player 2 Wins!🚩"
    }
    document.querySelector(".img1").src=images[num1]
    document.querySelector(".img2").src=images[num2]
})
