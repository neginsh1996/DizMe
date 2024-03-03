const navBtn = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

navBtn.addEventListener('click', () => {
    navbar.classList.toggle('show');
    navBtn.classList.toggle('active');
})




/* وقتی روی هر دکمه از منو کلیک شد باعث بسته شدن پنجره میشود */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
      // prevent default
      e.preventDefault();
      navbar.classList.remove("show");
      navBtn.classList.remove('active');

      const id = e.target.getAttribute("href").slice(1);
      const element = document.getElementById(id);

      let position = element.offsetTop - 62;

      window.scrollTo({
          left: 0,
          top: position,
          behavior: "smooth"
      });
  });
});
/* end ---*/




const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance: '45px',
    duration: 2700,
    reset: true
});



sr.reveal(' .home-text, .sub-content, .icon, .btn, .contact-content , .text-contact',{origin:'left'});
sr.reveal(' .home-image, .about-text',{origin:'right'});
sr.reveal(' .portfolio-center, .center-work, .work-content',{origin:'top'});
sr.reveal(' .about-content, .center-text, .services-content, .portfolio-content, .footer-content',{origin:'bottom'});