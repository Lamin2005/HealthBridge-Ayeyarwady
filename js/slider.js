const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slideWidth = slider.querySelector('.slide').offsetWidth + 15; // Add gap spacing
let index = 0;

const moveSlider = () => {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
};

next.addEventListener('click', () => {
  if (index < slider.children.length - 3) {
    index++;
    moveSlider();
  }
});

prev.addEventListener('click', () => {
  if (index > 0) {
    index--;
    moveSlider();
  }
});

// Auto-scroll functionality
const autoScroll = () => {
  index = (index < slider.children.length - 3) ? index + 1 : 0;
  moveSlider();
};
let autoScrollInterval = setInterval(autoScroll, 3000);

// Pause auto-scroll on mouse enter
slider.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));

// Resume auto-scroll on mouse leave
slider.addEventListener('mouseleave', () => {
  autoScrollInterval = setInterval(autoScroll, 3000);
});

// Scroll functionality with cursor drag
let isDragging = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  slider.style.cursor = 'grabbing';
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDragging = false;
  slider.style.cursor = 'default';
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
  slider.style.cursor = 'default';
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

