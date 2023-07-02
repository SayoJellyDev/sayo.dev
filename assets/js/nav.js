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


var _feature_cards = document.getElementById("feature-cards")
var close = document.getElementById("close")

var _likes_card = document.getElementById("likesNode")
var _projects_card = document.getElementById("projectsNode")
var _contact_card = document.getElementById("contactNode")
var _title_card = document.getElementById("title-card")


// Lazy code, but if the likes element exists the others must too!
// just reducing errors is all!
if (likes) {
close.addEventListener("mousedown",closeNode)

likes.addEventListener('mouseover',openNode)
projects.addEventListener('mouseover',openNode)
contact.addEventListener('mouseover',openNode)
}



// Noice but not noice
function openNode(event) {
    _feature_cards.classList.add("shown")
    if (event.target.id == "likes") {
        _likes_card.classList.add("shown")
        _projects_card.classList.remove("shown")
        _contact_card .classList.remove("shown")

        _title_card.classList.add("moved")
    }
    else if (event.target.id == "projects") {
        _likes_card.classList.remove("shown")
        _projects_card.classList.add("shown")
        _contact_card .classList.remove("shown")

        _title_card.classList.add("moved")
    }
    else if (event.target.id == "contact") {
        _likes_card.classList.remove("shown")
        _projects_card.classList.remove("shown")
        _contact_card .classList.add("shown")

        _title_card.classList.add("moved")
    }
}

function closeNode(event) {
    if (event.target.id == "close") {
        _feature_cards.classList.remove("shown")
        _title_card.classList.remove("moved")
    }
}