// ==============================
// Select Elements
// ==============================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.getElementById("theme-toggle");

// ==============================
// Mobile Menu Toggle
// ==============================

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==============================
// Dark Mode
// ==============================

const icon = themeToggle.querySelector("i");

// Load Saved Theme
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-theme");

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme","dark");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme","light");
    }

});

// ==============================
// Close Mobile Menu After Click
// ==============================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ==============================
// Back To Top
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});