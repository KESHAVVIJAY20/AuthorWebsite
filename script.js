// document.addEventListener('DOMContentLoaded', () => {
//     // Define the media query
//     const mediaQuery = window.matchMedia('(max-width: 430px)');
//     let listIcon = document.querySelector('list-ul');
//     let menu = document.querySelector('menu-ul li')

//     listIcon.addEventListener('click', function check(e){
//         menu.style.display='block';
//     })
//     check(mediaQuery);
//     mediaQuery.addListener(check);
// });

let listIcon = document.querySelector('#list-icon');
let menu = document.querySelector('.menu');
var Menu = document.querySelector('.list-icon-menu')

function showMenu(){
    // var list = document.getElementsByClassName('list-icon');
    var menu =  document.querySelector('.menu')
    Menu.style.display='block';
}
// function hideMenu(){
//     // var list = document.getElementsByClassName('list-icon');
//     var menu =  document.querySelector('.menu')
//     menu.style.display='none';
// }

listIcon.addEventListener('click', function(){
    menu.classList.add('hide');
    listIcon.style.display='none';
})


