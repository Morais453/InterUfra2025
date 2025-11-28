document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children);

  items.forEach(item => track.appendChild(item.cloneNode(true)));
});