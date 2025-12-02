document.addEventListener("DOMContentLoaded", function(){
  const grids = document.querySelectorAll('.gridBox');

  const hoodie = document.getElementById('hoodie');
  const helmet = document.getElementById('helmet');
  const stekpanna = document.getElementById('stekpanna');
  const gryta = document.getElementById('gryta');
  const knivset = document.getElementById('knivset');
  const gun = document.getElementById('gun');

  const overlay = document.getElementById('overlay');
  const totalSumma = document.getElementById('total');

  let sum = 0;

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


  hoodie.addEventListener("click", () => {
      sum += 550;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })

  helmet.addEventListener("click", () => {
      sum += 750;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })

  stekpanna.addEventListener("click", () => {
      sum += 450;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })

  gryta.addEventListener("click", () => {
      sum += 350;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })

  knivset.addEventListener("click", () => {
      sum += 1050;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })

  gun.addEventListener("click", () => {
      sum += 2500;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })
})
