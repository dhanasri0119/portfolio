// DOM Selections
const tabs = document.querySelectorAll('.tab');
const projects = document.querySelectorAll('.project');
const portfolioSection = document.querySelector('#portfolio');
const navLinks = document.querySelectorAll('nav ul li a');
const typewriterElement = document.querySelector('.typewriter');
const textArray = ["UI/UX Designer", "UI/UX Developer"];

// Variables
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 150;
const pause = 1000;

// Tab Filtering with Animation
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.getAttribute('data-category');

    projects.forEach((project, index) => {
      project.classList.remove('show', 'animate-in');
      setTimeout(() => {
        if (category === 'all' || project.classList.contains(category)) {
          project.classList.add('show', 'animate-in');
        }
      }, index * 100);
    });
  });
});

// Portfolio Animation when Navigating
document.querySelector('a[href="#portfolio"]').addEventListener('click', (e) => {
  e.preventDefault();
  portfolioSection.scrollIntoView({ behavior: 'smooth' });

  projects.forEach((project, index) => {
    setTimeout(() => {
      project.classList.add('show', 'animate-in');
    }, index * 100);
  });
});

// Header Animation on Nav Click
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetSection = document.querySelector(link.getAttribute('href'));

    if (targetSection) {
      const sectionHead = targetSection.querySelector('h2, h1');
      if (sectionHead) {
        sectionHead.classList.add('animate-in');
        sectionHead.addEventListener('animationend', () => {
          sectionHead.classList.remove('animate-in');
        });
      }
    }
  });
});

// Typewriter Effect
function typeWriter() {
  if (!typewriterElement) return;

  if (!isDeleting) {
    typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    if (charIndex === textArray[textIndex].length) {
      isDeleting = true;
      setTimeout(typeWriter, pause);
      return;
    }
  } else {
    typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }
  
  setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
}

typeWriter();
