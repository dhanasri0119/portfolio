const tabs = document.querySelectorAll('.tab');
const projects = document.querySelectorAll('.project');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const portfolioSection = document.querySelector('#portfolio');

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

// Directly jump to the portfolio section and trigger animations
portfolioLink.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.hash = "portfolio"; // Instantly navigate
  projects.forEach((project, index) => {
    project.classList.add('show', 'animate-in');
  });
});




// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetSection = document.querySelector(link.getAttribute('href'));

    // Ensure the target section exists
    if (targetSection) {
      // Find the heading inside the section
      const sectionHead = targetSection.querySelector('h2, h1');
      if (sectionHead) {
        // Add the animation class
        sectionHead.classList.add('animate-in');
        
        // Remove the animation class after the animation completes
        setTimeout(() => {
          sectionHead.classList.remove('animate-in');
        }, 600); // Match the duration of your CSS animation
      }
    }
  });
});


const textArray = ["UI/UX Designer", "UI/UX Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 150; // Typing speed
const pause = 1000; // Pause before deleting

function typeWriter() {
  const typewriterElement = document.querySelector('.typewriter');
  
  if (!isDeleting) {
    typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    if (charIndex === textArray[textIndex].length) {
      isDeleting = true;
      setTimeout(typeWriter, pause); // Pause before deleting
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
