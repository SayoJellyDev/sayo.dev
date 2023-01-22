var shown = false

var hide = document.getElementById("hide")
var cover = document.getElementById("cover")
var peeker = document.getElementById("peeker")

hide.addEventListener('click', navBarFunc);
cover.addEventListener('click', navBarFunc);
peeker.addEventListener('click', navBarFunc);

function navBarFunc()
{
    var w = window.innerWidth;
    if (w <= 720) {
        if (shown === true) {
            // Hide stuff
            //console.log(shown)
            shown = false
            hide.classList.remove("visible")
            cover.classList.remove("visible")
        } else if (shown  === false){
            // Show stuff
            //console.log(shown)
            hide.classList.add("visible")
            cover.classList.add("visible")
            shown = true
        }
    }
}

var likes = document.getElementById("likes")
var projects = document.getElementById("projects")
var contact = document.getElementById("contact")

var close = document.getElementById("close")

likes.addEventListener('mouseover',openNode)
projects.addEventListener('mouseover',openNode)
contact.addEventListener('mouseover',openNode)

close.addEventListener("mousedown",closeNode)

function openNode(event) {
    document.getElementById("feature-cards").classList.add("shown")
    if (event.target.id == "likes") {
        document.getElementById("likesNode").classList.add("shown")
        document.getElementById("projectsNode").classList.remove("shown")
        document.getElementById("contactNode").classList.remove("shown")

        document.getElementById("card").classList.add("moved")
    }
    else if (event.target.id == "projects") {
        document.getElementById("likesNode").classList.remove("shown")
        document.getElementById("projectsNode").classList.add("shown")
        document.getElementById("contactNode").classList.remove("shown")

        document.getElementById("card").classList.add("moved")
    }
    else if (event.target.id == "contact") {
        document.getElementById("likesNode").classList.remove("shown")
        document.getElementById("projectsNode").classList.remove("shown")
        document.getElementById("contactNode").classList.add("shown")

        document.getElementById("card").classList.add("moved")
    }
}

function closeNode(event) {
    if (event.target.id == "close") {
        document.getElementById("feature-cards").classList.remove("shown")
        document.getElementById("card").classList.remove("moved")
    }
}