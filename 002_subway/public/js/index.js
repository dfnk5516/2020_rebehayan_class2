const openSideButton = document.querySelector('.btn_sidemenu');
const closeSideButton = document.querySelector('.side_close');
const dim = document.querySelector('.dim');
const sideBar = document.querySelector('.sidebar_wrapper');

openSideButton.addEventListener('click', () => {
  sideBar.classList.remove('close');
  sideBar.classList.add('open');
  dim.classList.remove('close');
  dim.classList.add('open');
})
closeSideButton.addEventListener('click', () => {
  sideBar.classList.remove('open');
  sideBar.classList.add('close');
  dim.classList.remove('open');
  dim.classList.add('close');
});
