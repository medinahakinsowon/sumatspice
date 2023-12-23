let btn = document.querySelector('.btn')
btn.onmousemove = function(e) {
   let x = e.pageX - btn.offsetLeft;
   let y = e.pageY - btn.offsetTop;

   btn.style.setProperty('--x' , x + 'px');
   btn.style.setProperty('--y', y + 'px');
}


const hamburger = document.querySelector('.hamb')
const menu = document.querySelector('.mobile_navbar')

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('clicked');
   menu.classList.toggle('active');
})