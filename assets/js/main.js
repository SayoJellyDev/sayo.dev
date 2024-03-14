var message_list = [
    ["I love you!", 1],
    ["Always watching you -.-", 2],
    ["Never gonna give you up..", 2],
    ["<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' class='link'>click this you won't</a>", 2],
    ["The Internet Waifu", 10],
    ["INTERNET YAMERO!", 10],
    //["There is an error in the footer of this website! Please fix it!", 30],
    ["What the dog doing?", 20],
    ["fetch_chatgpt_response()", 20],
    ["Generating Vtuber model for Sayo", 20],
    ["Why are you here?", 20],
    ["I've got a secret for you in the next loading text!", 20],
    ["I'm playing Warframe right now", 20],
    ["1 + 1 = 2 (Just so you know <3)", 20],
    [":O", 20],
    ["A", 20],
    ["Loading screen text submissions at https://no.u/", 20],
    ["Getting a loading screen? Just a skill issue, I guess..", 30],
    ["What do I put here?", 30],
    ["sudo rm -fr *", 30],
    ["Spinning up the virtual machine, hold please!", 30],
    ["Procastinating are we?", 40],
    ["Just for you, I'm building the next page for you personally!", 40],
    ["Now with added colours and flavors", 50],
    ["Starting a new project", 60],
    ["Hi! <3", 70],
    ["Page Loading!", 200],
    ["Loading :D", 220],
    ["Please wait...", 220],
]

var current_message = ""

function set_new_message() {
    document.getElementById("loader-message").innerHTML = weighted_random(message_list)
    current_message = document.getElementById("loader-message").innerHTML
    //message_list.forEach(function(item, index) {
    //    console.log(item)
    //})
}


function weighted_random(items) {
    var i
    var total = 0
    for (i = 0; i < items.length; i++) {
        total += items[i][1] || 0;
    }

    const threshold = Math.random() * total;

    total = 0;
    for (i = 0; i < items.length; i++) {
        total += items[i][1]

        //console.log(i, total, threshold)
        if (total >= threshold) {
            return items[i][0];
        }
    }


}

document.addEventListener('htmx:afterRequest', function (evt) {
    set_new_message()
    htmx.addClass(htmx.find(".swapper"), "swapper-leaving-page")
    
    htmx.addClass(htmx.find(".swapper"), "swapper-middle")
})


document.body.addEventListener('htmx:afterOnLoad',function(evt) {  
    
});

document.body.addEventListener('htmx:afterSwap', function (evt) {
    htmx.removeClass(htmx.find(".swapper"), "swapper-leaving-page")
    htmx.addClass(htmx.find(".swapper"), "swapper-entering-page")

    
    // Timeout cheese so it's ever so slightly delayed for transition stuffs
    setTimeout(() => {
        htmx.addClass(htmx.find(".swapper"), "swapper-leaving")
    }, 25)

    setTimeout(() => {
        htmx.removeClass(htmx.find(".swapper"), "swapper-middle")
    }, 25)

    setTimeout(() => {
        htmx.removeClass(htmx.find(".swapper"), "swapper-leaving")
        htmx.removeClass(htmx.find(".swapper"), "swapper-middle")
        htmx.removeClass(htmx.find(".swapper"), "swapper-entering-page")
    }, 1000)
})