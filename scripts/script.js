const creationImages = document.querySelectorAll('.creation img');

if (window.innerWidth <= 480) {
  creationImages.forEach((cimg) => {
    const imgLink = cimg.src.replace("desktop", "mobile");
    cimg.src = imgLink;
  });
} else {
  creationImages.forEach((cimg) => {
    const imgLink = cimg.src.replace("mobile", "desktop");
    cimg.src = imgLink;
  });
}

window.addEventListener('resize', (e) => {
  if (e.target.innerWidth <= 480) {
    creationImages.forEach((cimg) => {
      const imgLink = cimg.src.replace("desktop", "mobile");
      cimg.src = imgLink;
    });
  } else {
    creationImages.forEach((cimg) => {
      const imgLink = cimg.src.replace("mobile", "desktop");
      cimg.src = imgLink;
    });
  }
});

const hamburgerBtn = document.querySelector('.hamburger-menu img');
const closeBtn = document.querySelector('.close-menu img');
const dialog = document.querySelector('dialog');

hamburgerBtn.addEventListener('click', () => {
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});