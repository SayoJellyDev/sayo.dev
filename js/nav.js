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