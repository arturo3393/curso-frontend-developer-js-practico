const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail'); 

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click',toggleCarAside);

//menuEmail
function  toggleDesktopMenu (){
  
    
    aside.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

//menu of the hambuger 
function toggleMobileMenu(){
    // const isAsideClosed = aside.classList.contains('inactive');

    // if(!isAsideClosed)    {
    //     aside.classList.add('inactive');
    // }
    
    aside.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}
//Shopping car
function toggleCarAside (){
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    // if(!isMobileMenuClosed){
    //     mobileMenu.classList.add('inactive');
    // }
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive')

    aside.classList.toggle('inactive');
}
