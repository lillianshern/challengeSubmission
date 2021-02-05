// 1. variables to store the points
// 2. add button
// 3. subtract button
// 4. build scoreboard layout
// 5. a button to clear the penalty list
// 6. a reset score button that clears  entire scoreboard
// 7. score cannot be less than 0
// 8. period can only be 1, 2, or 3 (starting from 1)

// let plyr1 = prompt("Who had a foul in Home team?")
// document.querySelector(".playerNameHome-1"). innerHTML = plyr1
// let plyr2 = prompt("Who had a foul in Guest team?")
// document.querySelector(".playerNameGuest-1"). innerHTML = plyr2
// let plyr3 = prompt("Who had a foul in Home team?")
// document.querySelector(".playerNameHome-2"). innerHTML = plyr3
// let plyr4 = prompt("Who had a foul in Guest team?")
// document.querySelector(".playerNameGuest-2"). innerHTML = plyr4
let period = 1;
let Home = 0;
let Guest = 0;

// add button

function addHome(){
    Home = Home + 1
    document.querySelector(".scoreCount1").innerHTML = Home
    document.getElementById("message").innerHTML = ""
}

function addGuest() {
    Guest = Guest + 1
    document.querySelector(".scoreCount2").innerHTML = Guest
    document.getElementById("message").innerHTML = ""
}

function addPeriod() {
    if (period == 3) {
        document.getElementById("message").innerHTML = "Error, period can only be 1, 2, or 3"
    } else {
        period = period + 1
        document.querySelector(".periodCount").innerHTML = period
        document.getElementById("message").innerHTML = ""
    }
}

// subtract button
function subHome(){
    // score can not be less than 0: if else to check
    if (Home == 0){
        document.getElementById("message").innerHTML = "Error score can not be less than 0"
    } else {
        Home = Home - 1
        document.querySelector(".scoreCount1").innerHTML = Home
        document.getElementById("message").innerHTML = ""
    }
}

function subGuest() {
    // score can not be less than 0: if else to check
    if (Guest == 0){
        // document.write (`Error, score can not be less than 0`)
        document.getElementById("message").innerHTML = "Error score can not be less than 0"
    } else {
        Guest = Guest - 1
        document.querySelector(".scoreCount2").innerHTML = Guest
        document.getElementById("message").innerHTML = ""
    }
}
// period can only be 1, 2, or 3 (starting from 1)
function subPeriod() {
    if (period == 1) {
        document.getElementById("message").innerHTML = "Error, period can only be 1, 2, or 3"
    } else {
        period = period - 1
        document.querySelector(".periodCount").innerHTML = period
        document.getElementById("message").innerHTML = ""
    }
}

// clear penalty list
function addPenalty1(){
    let plyr1 = prompt("Who had a foul in Home team?")
    document.querySelector(".playerNameHome-1"). innerHTML = plyr1
}
function addPenalty2(){
    let plyr2 = prompt("Who had a foul in Home team?")
    document.querySelector(".playerNameHome-2"). innerHTML = plyr2
}
function addPenalty3(){
    let plyr3 = prompt("Who had a foul in Guest team?")
    document.querySelector(".playerNameGuest-1"). innerHTML = plyr3
}
function addPenalty4(){
    let plyr4 = prompt("Who had a foul in Guest team?")
    document.querySelector(".playerNameGuest-2"). innerHTML = plyr4
}
function removePenalty1(){
    document.querySelector(".playerNameHome-1").innerHTML = ""
}
function removePenalty2(){    
    document.querySelector(".playerNameHome-2").innerHTML = ""
}
function removePenalty3(){    
    document.querySelector(".playerNameGuest-1").innerHTML = ""
}
function removePenalty4(){    
    document.querySelector(".playerNameGuest-2").innerHTML = ""
}

function clearPenalty(){
    document.querySelector(".playerNameGuest-1").innerHTML = ""
    document.querySelector(".playerNameGuest-2").innerHTML = ""
    document.querySelector(".playerNameHome-1").innerHTML = ""
    document.querySelector(".playerNameHome-2").innerHTML = ""
}


// reset score button
function reset() {
    document.querySelector(".scoreCount1").innerHTML = "0"
    document.querySelector(".scoreCount2").innerHTML = "0"
    document.querySelector(".periodCount").innerHTML = "1"
    document.querySelector(".playerNameGuest-1").innerHTML = ""
    document.querySelector(".playerNameGuest-2").innerHTML = ""
    document.querySelector(".playerNameHome-1").innerHTML = ""
    document.querySelector(".playerNameHome-2").innerHTML = ""

}