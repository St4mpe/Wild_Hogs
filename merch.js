const grids = document.querySelectorAll('.gridBox');
const overlay = document.getElementById('overlay');

grids.forEach(grid => {
  const priceEl = grid.querySelector('.price');
  priceEl.textContent = grid.dataset.price;

  grid.addEventListener('mouseenter', () => {
    grid.classList.add('active');
    overlay.classList.add('visible');
  });

  grid.addEventListener('mouseleave', () => {
    grid.classList.remove('active');
    overlay.classList.remove('visible');
  });
});

