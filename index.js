let menuToggler = document.querySelector('.menu-toggle');
let body = document.querySelector('body');

// menuToggler.addEventListener('click', function() {
//   body.classList.toggle('open');
// })

//another way 
menuToggler.addEventListener('click', () => body.classList.toggle('open'));

