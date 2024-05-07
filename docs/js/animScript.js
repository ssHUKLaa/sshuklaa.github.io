const heading2 = document.getElementById('Heading_2');
window.addEventListener('scroll', () => {
  const heading2Top = heading2.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (heading2Top < windowHeight) {
    heading2.style.transform = 'translateX(0)'; // Slide the heading into view
  }
});
