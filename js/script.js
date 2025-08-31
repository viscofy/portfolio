/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;

    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 696,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal('.home-content h1, .about-img', {origin: "left"})
ScrollReveal().reveal('.home-content p, .about-content', {origin: "right"})
/*==================== typed js ====================*/

const types = new Typed ('.multitext', {
    strings: ['Cinematography', 'Video Editing', 'Brand Reels', 'Advertisements', 'SMM'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 769,
    loop: true
}) 


// to get form data 

const scriptUrl = 'https://script.google.com/macros/s/AKfycbyjPc0iiV2WuasbbF6lVo3cuhutPuu4wNZMOkp0LR4StmieRPubixwe3uq-tnL38n5sFQ/exec'

const form = document.forms(form);

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptUrl, {method: "POST", body: new FormData(form)})
  .then(response => alert("Thanks For Submitting Your Details, I Will Respond To You As Soon As Possible!"))
  .then(() => {window.location.reload(); })
  .catch (error => ('Something Went Wrong', error.message))
})