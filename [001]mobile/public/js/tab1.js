const navBars = document.querySelectorAll('#nav1 p');

navBars.forEach(item => {
  item.addEventListener('click', e => {
    navBars.forEach(item => {
      item.classList.contains('nav1-p-active') ? item.classList.remove('nav1-p-active') : '';
    });
    e.target.classList.add('nav1-p-active');
  });
});
