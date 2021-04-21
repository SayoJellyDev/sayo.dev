$(document).ready(function (e) {
    $(".hide").click(function (e) {
        $(".hide").removeClass("visible")
        $(".cover").removeClass("visible")
    })

    $(".cover").click(function (e) {
        $(".hide").removeClass("visible")
        $(".cover").removeClass("visible")
    })

    $(".peeker").click(function (e) {
        if (document.documentElement.clientWidth < 720) {
            $(".hide").addClass("visible")
            $(".cover").addClass("visible")
        }
    })
});