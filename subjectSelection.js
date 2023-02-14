const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');

const mobileMenuBar = document.querySelector('.mobile-menu-bar');
const lists = Array.from(document.querySelectorAll('.list'));

burgerMenu.addEventListener('click',()=>{
    mobileMenuBar.style.width = '200px';
    burgerMenu.style.display = 'none';
    lists.map(list =>{
      list.style.display = 'block';
    });
})

closeMenu.addEventListener('click',()=>{
    mobileMenuBar.style.width = '0%';
    burgerMenu.style.display = 'block';

    lists.map(list =>{
      list.style.display = 'none';
    })
})