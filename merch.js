document.addEventListener("DOMContentLoaded", function(){
  const grids = document.querySelectorAll('.gridBox');

  const hoodie = document.getElementById('hoodie');
  const antalHoodie = document.getElementById('antalHoodie')
  const korgHoodie = document.getElementById('korgHoodie');

  const helmet = document.getElementById('helmet');
  const anatalHjälm = document.getElementById('anatalHjälm');
  const korgHjälm = document.getElementById('korgHjälm');

  const stekpanna = document.getElementById('stekpanna');
  const anatalStekpanna = document.getElementById('anatalStekpanna');
  const korgStekPanna = document.getElementById('korgStekPanna');

  const gryta = document.getElementById('gryta');
  const anatalGryta = document.getElementById('anatalGryta');
  const korgGryta = document.getElementById('korgGryta');

  const knivset = document.getElementById('knivset');
  const anatalKniv = document.getElementById('anatalKniv');
  const korgKniv = document.getElementById('korgKniv');

  const gun = document.getElementById('gun');
  const anatalGun = document.getElementById('anatalGun');
  const korgGun = document.getElementById('korgGun');

  const camp = document.getElementById('camp');
  const anatalTent = document.getElementById('anatalTent');
  const korgTent = document.getElementById('korgTent');

  const pinne = document.getElementById('pinne');

  const overlay = document.getElementById('overlay');
  const totalSumma = document.getElementById('total');



  let _antalHoodie = 0;
  let _anatalHjälm = 0;
  let _anatalStekpanna = 0
  let _anatalGryta = 0;
  let _anatalKniv = 0;
  let _anatalGun = 0;
  let _anatalTent = 0;

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
      _antalHoodie += 1;
      totalSumma.innerHTML = sum+"kr";
      antalHoodie.innerHTML = _antalHoodie+"x";
      korgHoodie.innerHTML = "Hoodie";
  })

  helmet.addEventListener("click", () => {
      sum += 750;
      _anatalHjälm += 1;
      totalSumma.innerHTML = sum+"kr";
      anatalHjälm.innerHTML = _anatalHjälm+"x";
      korgHjälm.innerHTML = "Hjälm";
  })

  stekpanna.addEventListener("click", () => {
      sum += 450;
      _anatalStekpanna += 1;
      totalSumma.innerHTML = sum+"kr";
      anatalStekpanna.innerHTML = _anatalStekpanna+"x";
      korgStekPanna.innerHTML = "Stekpanna";
  })

  gryta.addEventListener("click", () => {
      sum += 350;
      _anatalGryta += 1;
      totalSumma.innerHTML = sum+"kr";
      anatalGryta.innerHTML = _anatalGryta+"x";
      korgGryta.innerHTML = "Gryta";
  })

  knivset.addEventListener("click", () => {
      sum += 1050;
      _anatalKniv += 1;
      totalSumma.innerHTML = sum+"kr";
      anatalKniv.innerHTML = _anatalKniv+"x";
      korgKniv.innerHTML = "Knivset";
  })

  gun.addEventListener("click", () => {
      sum += 2500;
      _anatalGun += 1;
      totalSumma.innerHTML = sum+"kr";
      anatalGun.innerHTML = _anatalGun+"x";
      korgGun.innerHTML = "Gevär";
  })

  camp.addEventListener("click", () => {
      sum += 850;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })

  pinne.addEventListener("click", () => {
      sum += 7000;
      console.log(sum);
      totalSumma.innerHTML = sum+"kr";
  })
})
