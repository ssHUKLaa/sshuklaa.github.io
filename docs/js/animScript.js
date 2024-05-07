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

function scrollToSection(className) {
  var section = document.querySelector("." + className);
  section.scrollIntoView({ behavior: 'smooth' });
}