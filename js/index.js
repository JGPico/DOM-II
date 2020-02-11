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
imgChange.addEventListener('mouseleave', () => {
    imgChange.src = 'img/bus2.jpg';
});
