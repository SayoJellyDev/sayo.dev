var img_list = document.getElementsByTagName("img")

var preview = document.getElementsByClassName("preview")[0]

var library_list = document.getElementsByClassName("library")

var library_nav_buttons = document.getElementById("library-nav")

var library_list_data = []

var title_element = document.getElementById("preview-title")
var description_element = document.getElementById("preview-description")
var image_count = document.getElementById("preview-image-count")
var image_position = 0

var image_element = document.getElementById("preview-image")

var next_button_element = preview.getElementsByClassName("right")[0]
var prev_button_element = preview.getElementsByClassName("left")[0]
var preview_close_button = document.getElementById("preview-close")

next_button_element.addEventListener('click', nextImage, false);
prev_button_element.addEventListener('click', previousImage, false);
preview_close_button.addEventListener('click', hideImage, false);


var is_preview_shown = false

document.onkeydown = function (event) {
    if (!is_preview_shown) {
        return;
    }
    // Allow A+D or left+right for browsing image libraries
    // Esc for closing the image preview!
    // not the bestttt solution but it works and won't have issues :D
    switch (event.keyCode) {
        case 37:
            previousImage()
            break;
        case 39:
            nextImage()
            break;
        case 65:
            previousImage()
            break;
        case 68:
            nextImage()
            break;
        case 27:
            hideImage()
            break;
    }
};

for (var i = 0; i < img_list.length; i++) {
    img_list[i].addEventListener('click', previewImage, false);
}

for (var i = 0; i < library_list.length; i++) {
    library_list[i].addEventListener('click', previewLibrary, false);
}

function previewImage() {
    // Stop the main page from moving whilst previewing
    document.getElementsByTagName("html")[0].style.overflow = "hidden"
    // Show and set src img
    title_element.innerHTML = this.alt
    description_element.innerHTML = ""
    image_count.innerHTML = ""
    preview.classList.add('shown')
    is_preview_shown = true

    image_element.style.backgroundImage = `url(` + this.src + `)`;
}

function hideImage() {
    document.getElementsByTagName("html")[0].style.overflow = "auto"
    preview.classList.remove('shown')
    library_nav_buttons.classList.remove('shown')
    library_list_data = []

    is_preview_shown = false
}


function previewLibrary() {
    library_list_data = []

    // loop through each image within library and push them to an array
    for (var i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].classList == "image") {
            var array = []

            array[0] = this.childNodes[i].getElementsByTagName("img")[0]
            array[1] = this.childNodes[i].getElementsByClassName("description")[0]

            library_list_data.push(array)
        }
    }
    image_position = 0

    // set the first image of the array as the first image to show!
    setImage(library_list_data[0][0].src, library_list_data[0][0].alt, library_list_data[0][1].innerHTML)
    image_count.innerHTML = (image_position + 1) + " / " + library_list_data.length + " Images"

    // Hides webpage so user can't accidentally scroll whilst looking at images!
    document.getElementsByTagName("html")[0].style.overflow = "hidden"

    // Show Library
    library_nav_buttons.classList.add('shown')
    preview.classList.add('shown')
    is_preview_shown = true
}

function nextImage() {
    image_position += 1
    if (image_position > library_list_data.length - 1) {
        image_position = 0
    }

    setImage(library_list_data[image_position][0].src, library_list_data[image_position][0].alt, library_list_data[image_position][1].innerHTML)
    image_count.innerHTML = (image_position + 1) + " / " + library_list_data.length + " Images"
}

function previousImage() {
    image_position -= 1
    if (image_position < 0) {
        image_position = library_list_data.length - 1
    }

    setImage(library_list_data[image_position][0].src, library_list_data[image_position][0].alt, library_list_data[image_position][1].innerHTML)
    image_count.innerHTML = (image_position + 1) + " / " + library_list_data.length + " Images"
}

function setImage(url, title, description) {
    title_element.innerHTML = title
    description_element.innerHTML = description
    image_element.style.backgroundImage = `url(` + url + `)`;
}