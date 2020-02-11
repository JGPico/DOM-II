// Your code goes here

// event 1 with propagation stop.
const introH2 = document.querySelector('.intro h2');

introH2.addEventListener('click', (event) => {
    introH2.style.color = 'orange';
    event.stopPropagation();
});

const introBox = document.querySelector('.intro');

introBox.addEventListener('click', () => {
    introBox.style.backgroundColor = 'grey';
});

// prevent default for home click

// const stopLink = document.querySelector('.nav-link');
// stopLink.addEventListener('click', (event) => {
//     event.preventDefault();
// });