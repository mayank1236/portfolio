//EVENTS
window.onscroll = () => {
    
    fixedNavBg();
}

//HTML ELEMENTS
let nav = document.querySelector('.navbar');
let logo = document.querySelector('.navbar .logo');

//FUNCTIONS
function fixedNavBg() {
    let pos = window.pageYOffset;
    let threshold = 82;
    // Increases on scroll till 82 scroll position (min: 0, max: 1)
    let opacity = (pos >= threshold) ? 1 : pos/threshold;
    
    let shadow = `rgba(50, 50, 93, ${opacity * 0.25}) 0px 6px 12px -2px, rgba(0, 0, 0,  ${opacity * 0.3}) 0px 3px 7px -3px`;
    
    // nav.style.boxShadow = shadow;
    // nav.style.backgroundColor = `rgb(228, 249, 245, ${opacity})`;
    // logo.style.fontSize = `${ (10 * (1 - opacity)) + 28 }px`;
    
    styling(
        nav, 
        [
            ['boxShadow', shadow],
            ['backgroundColor', `rgb(228, 249, 245, ${opacity})`]
        ]
    );

    styling(logo, [['fontSize', `${ (10 * (1 - opacity)) + 30 }px`]]);
}

function styling(ele, props = []) {

    props.map(prop => {
        ele.style[prop[0]] = prop[1];
    });
}