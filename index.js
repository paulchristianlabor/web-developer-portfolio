var isNavOpen = false

function openNav() {
    document.getElementById("main-nav").classList.remove("hidden")
    document.getElementById("buttonhamburger").classList.add("hidden")
}

function closeNav() {
    document.getElementById("main-nav").classList.add("hidden")
    document.getElementById("buttonhamburger").classList.remove("hidden")
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