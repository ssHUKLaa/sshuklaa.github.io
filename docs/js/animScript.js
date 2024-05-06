const slideInButtons = document.querySelectorAll('.slide-in-button');
window.addEventListener('scroll', () => {
  slideInButtons.forEach(button => {
    const buttonTop = button.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (buttonTop < windowHeight) {
      button.style.transform = 'translateX(0)'; // Slide the button into view
    }
  });
});