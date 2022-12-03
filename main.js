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

const carousel = document.querySelector(".carousel"),
arrowIcons = document.querySelectorAll(".wrapper i");


let isDragStart = false, prevPageX, prevScrollLeft;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        console.log(icon);
    });
});

const dragStart = (e) => {
    // Updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // Scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);