// //global
// toggleMenu();

//EVENTS
window.onresize = () => {
    fixedNavBg();
    toggleMenu();
}

window.onload = () => {
    fixedNavBg();
    toggleMenu();
}

window.onscroll = () => {
    fixedNavBg();
}

//HTML ELEMENTS
let nav = document.querySelector('.navbar');
let logo = document.querySelector('.navbar .logo');
let navMenu = document.querySelector('.navbar .nav');

//FUNCTIONS
function fixedNavBg() {
    let pos = window.pageYOffset;
    let threshold = 82;
    // Increases on scroll till 82 scroll position (min: 0, max: 1)
    let opacity = (pos >= threshold) ? 1 : pos/threshold;
    let shadow = `rgba(50, 50, 93, ${opacity * 0.25}) 0px 6px 12px -2px, rgba(0, 0, 0,  ${opacity * 0.3}) 0px 3px 7px -3px`;

    styling(
        nav, 
        [
            ['boxShadow', shadow],
            ['backgroundColor', `rgb(228, 249, 245, ${opacity})`]
        ]
    );

    styling(logo, [['fontSize', `calc(${ (10 * (1 - opacity)) + 'px'} + ${getLogoFont(window.innerWidth)})`]]);
}

function styling(ele, props = []) {
    props.map(prop => {
        ele.style[prop[0]] = prop[1];
    });
}

function getLogoFont(width) {
    let logoSize = 0;

    if(width <= 992 && width > 576) {
        logoSize = 25;
    } else if(width <= 576) {
        logoSize = 20;
    } else {
        logoSize = 30;
    }

    return (logoSize + 'px');
}

function toggleMenu() {
    navMenu.style.display = 'flex';
    if(window.innerWidth <= 576) {
        navMenu.style.display = 'none';
    }
}