// Your code goes here

// event 1 with propagation stop.
const introH2 = document.querySelector('.intro h2');

introH2.addEventListener('click', (event) => {
    introH2.style.color = 'orange';
    event.stopPropagation();
});

const introBox = document.querySelector('.intro');

introBox.addEventListener('click', (event) => {
    introBox.style.backgroundColor = 'grey';
    event.stopPropagation();
});

// prevent default for home click
const stopLink = document.querySelector('.nav-link');
stopLink.addEventListener('click', (event) => {
    event.preventDefault();
});

// event 2
document.querySelectorAll('h2').forEach( el => {
    el.addEventListener('mouseenter', () => {
        el.style.color = 'blue';
    });
});

// event 3
const imgChange = document.querySelector('.img-content img');
imgChange.addEventListener('mouseenter', () => {
    imgChange.src = 'img/bus2.jpg';
});
imgChange.addEventListener('mouseleave', () => {
    imgChange.src = 'img/adventure.jpg';
})

// event 4
const pChange = document.querySelectorAll('p');

pChange.forEach(el => {
    document.addEventListener('keydown', () => {
        el.style.color = 'dodgerblue';
    });

// event 5
    document.addEventListener('keyup', () => {
        el.style.color = 'black';
    });
})

// event 6 - ask about nav bar overlap
const imgResize = document.querySelector('.inverse-content img');
window.addEventListener('resize', () => {
    imgResize.style.transform = 'scale(1.2)';
    imgResize.style.transition = 'transform 0.3s';
})

// event 7
window.addEventListener('scroll', () => {
    imgResize.style.transform = 'scale(1)';
    imgResize.style.transition = 'transform 0.3s';
})

// event 8
const homeBackGround = document.querySelector('body');
const imgRoller = document.querySelector('.imgRoll');
imgRoller.addEventListener('mousemove', (event) => {
    homeBackGround.style.backgroundColor = "rgb("+event.offsetX+","+event.offsetY+",60)";
    document.querySelector('.home').style.backgroundColor = 'white';
})

// event 9
pChange.forEach(el => {
    document.addEventListener('dblclick', () => {
        el.style.fontWeight = 'bold';
    })
})
