const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");

function toggleMenuVisibility() {
    menuList.classList.toggle("hide");
}


menuBtn.addEventListener("click", toggleMenuVisibility);


function myImg() {
    let elem = document.getElementById('img_1'); // получаем элемент по ID
    let style = getComputedStyle(elem); // получаем его стили
    if (style.display === 'none') {
      document.getElementById('img_1').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('img_1').style.display='none';
    }
  }
  
