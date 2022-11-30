var isNavOpen = false

function openNav() {
    document.getElementById("hidden-menu").classList.add("hiddenmenuopen")
    document.getElementById("hidden-menu").classList.remove("hiddenmenuclose")
}

function closeNav() {
    document.getElementById("hidden-menu").classList.add("hiddenmenuclose")
    document.getElementById("hidden-menu").classList.remove("hiddenmenuopen")
}

function onClick() {
    isNavOpen = !isNavOpen
    if (isNavOpen) {
        openNav()
    }
    else {
        closeNav()
    }
}