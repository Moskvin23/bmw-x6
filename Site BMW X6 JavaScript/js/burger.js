const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');

const handlerMenu = event =>{
    const target = event.target;
    if(target.matches('.menu-list__link')){
        toggleMenu() 
    }
}
// and now , I create two menues - first will open and close / second will close


const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
    if(menuElem.classList.contains('menu-active')){
        document.body.addEventListener('click',handlerMenu)
    } else {
        document.body.removeEventListener('click',handlerMenu)
    }
};

humburgerElem.addEventListener('click',toggleMenu);
