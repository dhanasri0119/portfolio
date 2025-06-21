// DOM Selections
// const tabs = document.querySelectorAll('.tab');
// const projects = document.querySelectorAll('.project');
// const portfolioSection = document.querySelector('#portfolio');
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
// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     tabs.forEach(t => t.classList.remove('active'));
//     tab.classList.add('active');

//     const category = tab.getAttribute('data-category');

//     projects.forEach((project, index) => {
//       project.classList.remove('show', 'animate-in');
//       setTimeout(() => {
//         if (category === 'all' || project.classList.contains(category)) {
//           project.classList.add('show', 'animate-in');
//         }
//       }, index * 100);
//     });
//   });
// });

// // Portfolio Animation when Navigating
// document.querySelector('a[href="#portfolio"]').addEventListener('click', (e) => {
//   e.preventDefault();
//   portfolioSection.scrollIntoView({ behavior: 'smooth' });

//   projects.forEach((project, index) => {
//     setTimeout(() => {
//       project.classList.add('show', 'animate-in');
//     }, index * 100);
//   });
// });


// ... (previous JavaScript code) ...

// Portfolio Section Elements
const mainTabs = document.querySelectorAll('.main-tab');
const subTabsDeveloping = document.querySelectorAll('#developing-sub-tabs .sub-tab');
const subTabsDesigning = document.querySelectorAll('#designing-sub-tabs .sub-tab');
const developingSubTabsContainer = document.getElementById('developing-sub-tabs');
const designingSubTabsContainer = document.getElementById('designing-sub-tabs');
const projectCards = document.querySelectorAll('.project-card');

let currentMainCategory = 'all'; // Default to 'all' projects
let currentSubCategory = ''; // No sub-category selected by default for 'all'

// Function to filter projects
function filterProjects() {
    projectCards.forEach(card => {
        const isDeveloping = card.classList.contains('developing');
        const isDesigning = card.classList.contains('designing');

        let showCard = false;

        if (currentMainCategory === 'all') {
            showCard = true; // Show all for 'All Projects'
        } else if (currentMainCategory === 'developing' && isDeveloping) {
            if (currentSubCategory === 'all-developing' || card.classList.contains(currentSubCategory)) {
                showCard = true;
            }
        } else if (currentMainCategory === 'designing' && isDesigning) {
            if (currentSubCategory === 'all-designing' || card.classList.contains(currentSubCategory)) {
                showCard = true;
            }
        }

        if (showCard) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
    AOS.refresh();
}

// Event listeners for Main Tabs
mainTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        mainTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        currentMainCategory = tab.getAttribute('data-main-category');

        // Hide/show sub-tabs based on main category
        if (currentMainCategory === 'developing') {
            developingSubTabsContainer.style.display = 'flex';
            designingSubTabsContainer.style.display = 'none';
            // Reset sub-tab active state for developing
            subTabsDeveloping.forEach(t => t.classList.remove('active'));
            subTabsDeveloping[0].classList.add('active'); // Activate 'All Developing'
            currentSubCategory = 'all-developing'; // Set default sub-category for developing
        } else if (currentMainCategory === 'designing') {
            developingSubTabsContainer.style.display = 'none';
            designingSubTabsContainer.style.display = 'flex';
            // Reset sub-tab active state for designing
            subTabsDesigning.forEach(t => t.classList.remove('active'));
            subTabsDesigning[0].classList.add('active'); // Activate 'All Designing'
            currentSubCategory = 'all-designing'; // Set default sub-category for designing
        } else { // All Projects
            developingSubTabsContainer.style.display = 'none';
            designingSubTabsContainer.style.display = 'none';
            currentSubCategory = ''; // No sub-category filter for 'All' main tab
        }

        filterProjects();
    });
});

// Event listeners for Developing Sub Tabs
subTabsDeveloping.forEach(tab => {
    tab.addEventListener('click', () => {
        subTabsDeveloping.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSubCategory = tab.getAttribute('data-sub-category');
        filterProjects();
    });
});

// Event listeners for Designing Sub Tabs
subTabsDesigning.forEach(tab => {
    tab.addEventListener('click', () => {
        subTabsDesigning.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSubCategory = tab.getAttribute('data-sub-category');
        filterProjects();
    });
});

// Initial setup on page load:
// 1. Ensure 'All Projects' tab is active
document.querySelector('.main-tab[data-main-category="all"]').classList.add('active');
// 2. Ensure sub-tabs are hidden (already handled by CSS, but good to reconfirm logic)
developingSubTabsContainer.style.display = 'none';
designingSubTabsContainer.style.display = 'none';
// 3. Perform initial filtering to show all projects
filterProjects();

// ... (remaining JavaScript code) ...

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







// header




  function toggleMenu() {
    const nav = document.getElementById("main-nav");
    const btn = document.getElementById("menu-toggle");
    nav.classList.toggle("show");
    btn.classList.toggle("open");
  }

  function closeMenu() {
    document.getElementById("main-nav").classList.remove("show");
    document.getElementById("menu-toggle").classList.remove("open");
  }


// about

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate-in");
//         observer.unobserve(entry.target); // Only animate once
//       }
//     });
//   }, {
//     threshold: 0.2
//   });

//   document.querySelectorAll(".about-cards").forEach(card => {
//     observer.observe(card);
//   });

const scriptURL = 'https://script.google.com/macros/s/AKfycbwftAFsD6jakbm2NH_R34R_LVpZl8MVz6O6RK9YcZlhj4QsrLk1y7S_W6pBjZKmZ4Hy/exec'; // Replace with your deployed Google Script URL
    const form = document.forms['submit-to-google-sheet'];
    const successMsg = document.querySelector('.success-message');

    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        successMsg.style.display = 'block';
        form.reset();
        // You can also trigger email using Google Apps Script from there
      })
      .catch(error => console.error('Error!', error.message));
    });


    AOS.refresh();