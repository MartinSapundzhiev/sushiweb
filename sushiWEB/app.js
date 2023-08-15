
const elements = document.querySelectorAll('.slide-right, .slide-left, .slide-bottom')


function checkScroll() {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const isVisible = elementTop - window.innerHeight < 0;
    
    if (isVisible) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);




const menu_btn =  document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const undo_btn = document.querySelector('.undo');

menu_btn.addEventListener('click', () =>{
   menu_btn.classList.toggle('is-active');
   mobile_menu.classList.toggle('is-active');
   undo_btn.classList.toggle('is-active');
});




  