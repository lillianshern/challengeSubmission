var sadend = new Audio("https://youtu.be/7PtIHBCuR-Q")
var happyend = new Audio("https://youtu.be/pjDFB5_WfOE")

function gameStart() {

    // hide the start button 
    document.querySelector("#start").style.display = "none"

    // Display a prompt box which ask the user for her/his name, and output a message:
    var player = prompt("Please enter your name", "Senior");
  
    if (player != null) {
        document.getElementById("p1").innerHTML =
        "Hi, " + player + ", you're a senior in PAS. It is May, and you're starting to prepare for college applications. <br><br> Pamela: " + "So, " +
        player + ", what's your intended major?"
    }

    // if the player didnt choose the options within 10 seconds
    var slowTimer
    
    function runTimer (){
        slowTimer = setTimeout(tooSlow, 8000)
    }

    // Start timer
    runTimer()

    // End timer
    clearTimeout(slowTimer)
    document.querySelector("#one").innerText = "Sociology"
    document.querySelector("#one").style.display = "block"

    document.querySelector("#two").innerText = "Business"
    document.querySelector("#two").style.display = "block"
 }
  
 function tooSlow() {
    sadend.play()
    document.querySelector("#one").style.display = "none"
    document.querySelector("#two").style.display = "none"

    document.querySelector(".container").style.backgroundImage = "URL('end-homeless.gif')"
    
    
    document.getElementById("p1").innerHTML =
        "You were thinking for too long." +
        "<br><br> Pamela: You still don't know what you are doing with your future? DO YOU THINK THIS IS A JOKE?! That's it, I'm not going to waste my time on you. <br><br> You didn't apply to any school that year, and became homeless."

    
    document.querySelector("#start").innerText="Restart"
    document.querySelector("#start").style.display = "block"
    
    document.querySelector("#start").onclick = gameStart
 }

 function one() {
    document.getElementById("p1").innerHTML = "Pamela: *Looks at your transcript* Hmm... ok, then you are going to apply these schools."

    document.querySelector("#one").innerText = "Ask to apply Ivy League"
    document.querySelector("#one").onclick = deadend
    document.querySelector("#two").innerText = "Follow Pamela's College List"
    document.querySelector("#two").onclick = movingon

 }

 function two() {
    sadend.play()
    document.querySelector(".container").style.backgroundImage = "URL('end-salaryman.gif')"
    document.querySelector("#one").style.display = "none"
    document.getElementById("p1").innerHTML = "Pamela: *Looks at your transcript* Hmm... YOUR GPA DOES NOT EVEN QUALIFY you to GRADUATE, YOU'LL never get into any universities' department with that GPA. You failed her expectation, after highschool, you became a normal salaryman working from 9am to 10pm."


    document.querySelector("#two").innerText = "Restart"
    document.querySelector("#two").style.display = "block"
    document.querySelector("#two").onclick= gameStart
 }
 
function deadend() {
    sadend.play()
    document.getElementById("p1").innerHTML = "You did not listen to Pamela, she decides to kick you out of school. You end up going nowhere and became poor and lonely."
    document.querySelector(".container").style.backgroundImage = "URL('end-poor.gif')"
    document.querySelector("#one").style.display = "none"
    document.querySelector("#two").innerText= "Restart"
    document.querySelector("#two").style.display= "block"
    document.querySelector("#two").onclick= gameStart

}

function movingon(){
    happyend()
    document.getElementById("p1").innerHTML = "You listened to Pamela, and got into a decent school. You became rich and retired early to enjoy life. You opened a little store in downtown Japan."
    document.querySelector(".container").style.backgroundImage = "URL('successfulretire.gif')"
}