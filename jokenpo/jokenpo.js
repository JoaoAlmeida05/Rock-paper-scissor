//Array for switch
const jokenpo = ["Paper", "Rock", "Scissor"]

//Number for the arrays
var numForJok 

//Functions to get a number
function get_num0(){
    numForJok = 0
    console.log(numForJok)
}
function get_num1(){
    numForJok = 1
    console.log(numForJok)
}
function get_num2(){
    numForJok = 2
    console.log(numForJok)
}

//Only to change the play button' color
function play(obj){
    obj.style.background = "red"
}

//Algorithm for changing the pic of versus 
function playing(){
    switch(numForJok){
        case 0:
            document.getElementById("um").src = "paper.jpg"
            break
        case 1:
            document.getElementById("um").src = "pedra.webp"
            break
        case 2:
            document.getElementById("um").src = "tesoura.jpg"
    }
}

//store data of bet() function
var fun 

//Algorithm to make the AI bet
function bet(){
    fun = Math.floor(Math.random() * 3)
    console.log(fun)
}

//Algorithm to change the 2 versus pic 
function playing1(){
    switch(fun){
        case 0:
            document.getElementById("white").src = "paper.jpg"
            break
        case 1:
            document.getElementById("white").src = "pedra.webp"
            break
        case 2:
            document.getElementById("white").src = "tesoura.jpg"
    }
}


//Data for SCORE
var my = 0
var him = 0

//Algorithm to SCORE
function score(){
    switch (numForJok){
        case 0:
            if (fun == 2){
                return him++
            }else if(fun == 1){
                return my ++
            }
            break
        case 1:
            if(fun == 0){
                return him++ 
            }else if(fun == 2){
                return my++
            }
            break
        case 2:
            if(fun == 1){
                return him++
            }else if(fun == 0){
                return my++
            }
            break
    
    }
    console.log(my,him)
}

//
function shw_scr(obj){
    document.getElementById('last').textContent = "SCORE: "  + my + " | " + him 
}
