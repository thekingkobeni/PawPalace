'use strict';

// Function to add event listener(s) to element(s)
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        // If there are multiple elements, add event listener to each
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        // If there's only one element, add event listener to it
        elem.addEventListener(type, callback);
    }
}

// DOM elements
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const facilityBox = document.querySelector(".facility-box");
const popup = document.querySelector(".popup");

// Toggle navbar visibility
const toggleNavbar = function () {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
}

// Add click event listener to navigation toggler
addEventOnElem(navToggler, "click", toggleNavbar);

// Close navbar when a navigation link is clicked
const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

// Add click event listener to navigation links
addEventOnElem(navbarLinks, "click", closeNavbar);

// Change header and back-to-top button visibility on scroll
const activeElemOnScroll = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

// Add scroll event listener to window
addEventOnElem(window, "scroll", activeElemOnScroll);

// Show popup on facility box hover
facilityBox.addEventListener("mouseenter", function() {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
});

// Hide popup on facility box mouse leave
facilityBox.addEventListener("mouseleave", function() {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
});

// Carousel functionality
var slideIndex = 1;
showSlides(slideIndex);

// Function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

