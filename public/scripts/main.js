const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const header = document.getElementById('header');

menuToggle.onclick = function () {
  navLinks.classList.toggle('active');
  const icon = this.querySelector('i');
  icon.className = navLinks.classList.contains('active')
    ? 'fas fa-times'
    : 'fas fa-bars';
};

document.querySelectorAll('.nav-links a').forEach(link => {
  link.onclick = function () {
    navLinks.classList.remove('active');
    menuToggle.querySelector('i').className = 'fas fa-bars';
  };
});

window.onscroll = function () {
  header.classList.toggle('scrolled', window.scrollY > 50);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.onclick = function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute('href'))
      ?.scrollIntoView({ behavior: 'smooth' });
  };
});

const skills = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skills.forEach(skill => {
        skill.style.width = skill.dataset.progress + '%';
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

observer.observe(document.getElementById('habilidades'));
