const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const track = document.querySelector('.testimonial-track');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let position = 0;

  const cardWidth = 345; // Card + gap

  nextBtn.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;

    position += cardWidth;

    if (position > maxScroll) {
      position = maxScroll;
    }

    track.style.transform = `translateX(-${position}px)`;
  });

  prevBtn.addEventListener('click', () => {

    position -= cardWidth;

    if (position < 0) {
      position = 0;
    }

    track.style.transform = `translateX(-${position}px)`;
  });
