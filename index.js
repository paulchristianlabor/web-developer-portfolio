var isNavOpen = false

function openNav() {
    document.getElementById("hidden-menu").classList.remove("hiddenmenuopen")
    document.getElementById("buttonhamburger").classList.add("hiddenmenuclose")
}

function closeNav() {
    document.getElementById("main-nav").classList.add("hiddenmenuclose")
    document.getElementById("buttonhamburger").classList.remove("hiddenmenuopen")
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