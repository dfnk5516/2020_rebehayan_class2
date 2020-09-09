import { quickMenuItems, subMenuItems } from './menuItems.js';

const openSideButton = document.querySelector('.btn_sidemenu');
const closeSideButton = document.querySelector('.side_close');
const dim = document.querySelector('.dim');
const sideBar = document.querySelector('.sidebar_wrapper');
const quickMenus = document.querySelector('.quick_menus > ul');
const subMenus = document.querySelector('.sub_menus > ul');
const imagePrefix = 'images/';

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

quickMenuItems.forEach(n=>{
  let tempLi = document.createElement('li');
  let tempA = document.createElement('a');
  tempA.href = n.href;
  tempA.innerText = n.text;
  tempA.style.background = `url(${imagePrefix}${n.background}) no-repeat center top / 2.25rem auto`;
  tempLi.appendChild(tempA);
  quickMenus.appendChild(tempLi);
})

subMenuItems.forEach(n=>{
  let tempLi = document.createElement('li');
  let tempSpan = document.createElement('span');
  let tempUl = document.createElement('ul');
  
  n.children.forEach(n=>{
    let tempA = document.createElement('a'); 
    tempA.innerText = n.text;
    tempA.href = n.href;
    tempUl.classList.add('children');
    tempUl.innerHTML += `<li>${tempA.outerHTML}</li>`;
  })

  tempSpan.innerText = n.text;
  tempSpan.style.background = `url(${imagePrefix}${n.background}) no-repeat .75rem center / 1.3rem auto, #fff`;
  tempLi.addEventListener('click', e=>{
    if(e.target.tagName !== 'SPAN') return;

    tempLi.classList.contains('active')
      ? (()=>tempLi.classList.remove('active'))()
      : (()=>tempLi.classList.add('active'))()
  })

  tempLi.appendChild(tempSpan);
  tempLi.appendChild(tempUl);
  subMenus.appendChild(tempLi);
})




