var sadend = new Audio("IB.mp3")
var happyend = new Audio("SA.mp3")
var slowTimer

function runTimer (){
    slowTimer = setTimeout(tooSlow, 10000)
}

function gameStart() {

    document.querySelector(".container").style.backgroundImage = "URL('home.gif')"

    // Start timer
    runTimer()
    // hide the start button 
    document.querySelector("#start").style.display = "none"
    
    // Display a prompt box which ask the user for her/his name, and output a message:
    var player = prompt("Please enter your name", "Senior");
    
    if (player != null) {
        document.getElementById("p1").innerHTML =
        "Hi, " + player + ", you're a senior in PAS. It is May, and you're starting to prepare for college applications. " + "<br><br>Because of COVID, you are going to meet Ms.Pamela, the school's principle, at home to discuss your major and universities." + 
        "<br><br> Pamela: " + "So, " + player + ", what's your intended major?"
    }

    document.querySelector("#p").innerText = "Sociology"
    document.querySelector("#p").style.display = "block"

    document.querySelector("#onep").innerText = "Business"
    document.querySelector("#onep").style.display = "block"
}
  
function tooSlow() {
    sadend.play()
    document.querySelector("#p").style.display = "none"
    document.querySelector("#onep").style.display = "none"

    document.querySelector(".container").style.backgroundImage = "URL('end-homeless.gif')"
    
    
    document.getElementById("p1").innerHTML =
        "You were thinking for too long." +
        "<br><br> Pamela: You still don't know what you are doing with your future? DO YOU THINK THIS IS A JOKE?! That's it, I'm not going to waste my time on you. <br><br> You didn't apply to any school that year, and became homeless."

    
    document.querySelector("#res").style.display = "block"
}

function res() {

    document.querySelector(".container").style.backgroundImage = "URL('home.gif')"

    sadend.pause()

    // Start timer
    runTimer()

    document.querySelector("#start").style.display = "none"
    document.querySelector("#res").style.display = "none"

    document.getElementById("p1").innerHTML = "You've a decided to wait another year to apply. It is May again, and you're starting to prepare for college applications. <br><br> Pamela: " + "So, what's your intended major this time?"

    document.querySelector("#p").innerText = "What Pam offers"
    document.querySelector("#p").style.display = "block"
    document.querySelector("#p").onclick = p

    document.querySelector("#onep").innerText = "What you want"
    document.querySelector("#onep").style.display = "block"
    document.querySelector("#onep").onclick = onep
}

function p() {
    // End timer
    clearTimeout(slowTimer)
    sadend.pause()

    document.getElementById("p1").innerHTML = "Pamela: *Looks at your transcript* Hmm... ok, then you are going to apply these schools."

    document.querySelector("#onep").innerText = "Ask to apply Ivy League"
    document.querySelector("#onep").onclick = deadend
    document.querySelector("#p").innerText = "Follow Pamela's College List"
    document.querySelector("#p").onclick = movingon

}

function onep() {
    // End timer
    clearTimeout(slowTimer)

    sadend.play()

    document.querySelector(".container").style.backgroundImage = "URL('end-salaryman.gif')"
    document.querySelector("#p").style.display = "none"
    document.querySelector("#onep").style.display = "none"
    document.getElementById("p1").innerHTML = "Pamela: *Looks at your transcript* Hmm... YOUR GPA DOES NOT EVEN QUALIFY you to GRADUATE, YOU'LL never get into any universities' department with that GPA. You failed her expectation, after highschool, you became a normal salaryman working from 9am to 10pm."
    
    document.querySelector("#res").style.display = "block"
}
 
function deadend() {
    
    sadend.play()

    document.getElementById("p1").innerHTML = "You did not listen to Pamela, she decides to kick you out of school. You end up going nowhere and became poor and lonely."
    document.querySelector(".container").style.backgroundImage = "URL('end-poor.gif')"
    document.querySelector("#start").style.display = "none"
    document.querySelector("#p").style.display = "none"
    document.querySelector("#onep").style.display = "none"

    document.querySelector("#res").style.display = "block"
}

function movingon(){
    document.querySelector("#res").style.display = "none"
    document.querySelector("#start").style.display = "none"

    sadend.pause()

    document.getElementById("p1").innerHTML = "You listened to Pamela, and today is your decision result release date!!"
    document.querySelector(".container").style.backgroundImage = "URL('home.gif')"
    document.querySelector("#p").innerText = "Open the decision letter"
    document.querySelector("#p").onclick = end
    document.querySelector("#onep").innerText = "Burn it"
    document.querySelector("#onep").onclick = burn
}

function end(){

    happyend.play()

    document.getElementById("p1").innerHTML = "You listened to Pamela, didn't burn your decision letter, and got into a decent school. You became rich and retired early to enjoy life. You opened a little store in downtown Japan."
    document.querySelector(".container").style.backgroundImage = "URL('happyend.gif')"
    document.querySelector("#p").style.display = "none"
    document.querySelector("#onep").style.display = "none"
}

function burn(){
    sadend.play()

    document.getElementById("p1").innerHTML = "You burned your decision letter, and also your home during the process. You burned all the money you saved, and now you end up living under the bridge."
    document.querySelector(".container").style.backgroundImage = "URL('burned.gif')"
    document.querySelector("#p").style.display = "none"
    document.querySelector("#onep").style.display = "none"
}