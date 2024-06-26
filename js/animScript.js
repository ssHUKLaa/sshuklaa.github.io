const heading2 = document.getElementById('Heading_2');
window.addEventListener('scroll', () => {
  const heading2Top = heading2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (heading2Top < windowHeight) {
    heading2.style.transform = 'translateX(0)'; // Slide the heading into view
  }
});
const heading3 = document.querySelectorAll('.sub-heading-2');

window.addEventListener('scroll', () => {
  heading3.forEach(subHeading => {
    const subHeadingTop = subHeading.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (subHeadingTop < windowHeight) {
      subHeading.style.transform = 'translateX(0)'; // Slide the heading into view
    }
  });
});
const heading4 = document.getElementById('Heading_4');
window.addEventListener('scroll', () => {
  const heading4Top = heading4.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (heading4Top < windowHeight) {
    heading4.style.transform = 'translateX(0)'; // Slide the heading into view
  }
});
const logoContainers = document.querySelectorAll('.Logo-container');

window.addEventListener('scroll', () => {
  logoContainers.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight) {
      container.style.transform = 'translateX(0)'; // Slide the container into view
    }
  });
});

const logoContainerss = document.querySelectorAll('.Horizontal-Projects');

window.addEventListener('scroll', () => {
  logoContainerss.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (containerTop < windowHeight) {
      container.style.transform = 'translateX(0)'; // Slide the container into view
    }
  });
});





function scrollToSection(className) {
  var section = document.querySelector("." + className);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function () {
  const projectBoxContainer = document.querySelector('.project-box-container');
  projectBoxContainer.addEventListener('touchstart', function () {
      this.classList.toggle('hovered');
  });
});