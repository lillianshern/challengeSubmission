var filmName = document.querySelector(".filmName")
var title = [" Mother ", " The Call of the Wild ", " Classmates Minus ", " Call ", " #Alive ", " The Bridge Curse"]
let link = ["https://m.media-amazon.com/images/M/MV5BMjYxZGM0YjgtOWNiYS00NjcwLTk4YjMtM2NlMTUwYTdmMjQ5XkEyXkFqcGdeQXVyNTI4ODg2Mjc@._V1_.jpg", 
"https://m.media-amazon.com/images/M/MV5BZDA1ZmQ2OGMtZDhkMC00ZjRkLWE3ZTMtMzA5ZTk0YjM1OGRmXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg", 
"https://m.media-amazon.com/images/M/MV5BNmU1MTllYjUtZGFhYS00NTNhLWIwZGYtMWZiZmYwNDdlMDJiXkEyXkFqcGdeQXVyMTIwMzA3NDcx._V1_.jpg", 
"https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/Call_poster.jpg/220px-Call_poster.jpg", 
"https://m.media-amazon.com/images/M/MV5BZTMwNDUxNjItMDgzNS00MjU3LTllZTktOGVmZGM4N2FmYmYzXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_.jpg",
"https://i.mydramalist.com/2DbJVf.jpg"]

link.forEach(function(element, index){
    var display = document.querySelector(".display")
    display.innerHTML += `<div class="titleDisplay"><center>${title[index]}</center><img src="${element}"></div>`
});

function add(){
    var addedTitle = document.querySelector("#title").value;
    var addedLink = document.querySelector("#link").value;
    var display = document.querySelector(".display")

    title.unshift(addedTitle)
    link.unshift(addedLink)
    title.pop()
    link.pop()

    // clear content
    display.innerHTML = ""
    link.forEach(function(element, index){
        var display = document.querySelector(".display")
        display.innerHTML += `<div class="titleDisplay"><center>${title[index]}</center><img src="${element}"></div>`
    });
   
}


