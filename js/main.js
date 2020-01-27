/* Drop Button */
// function showElement() {
//     if (document.querySelector(`.courses--link`).style.display = 'none') {
//         return document.querySelector(`.courses--link`).style.display = 'flex';

//     } else if (document.querySelector(`.courses--link`).style.display = 'flex') {
//         return document.querySelector(`.courses--link`).style.display = 'none';
//     }
// }


// function showElement() {
//     if (document.querySelector(`.courses--link`).style.display = 'none') {
//         return document.querySelector(`.courses--link`).style.display = 'flex';
//     }
// }
// function showElement() {
//     if (document.querySelector(`.courses--link`).style.display = 'flex') {
//         return document.querySelector(`.courses--link`).style.display = 'none';
//     }
// }

//     let show = document.querySelector(`.courses--link`).style.display;
// function showElement() {
//     if (show = 'none') {
//         document.querySelector(`.courses--link`).style.display = 'flex';

//     } else if ( show = 'flex') {
//         document.querySelector(`.courses--link`).style.display = 'none';
//     }
// }


// (function($D){
//     var $button    = $D.querySelector('.courses--item'),
//         $container = $D.querySelector('.courses--link');
  
//     $button.addEventListener('click', function(e) {
//           isVisible = $container.style.display == 'flex';
//       $container.style.display = isVisible ? 'none' : 'flex';
//     });
// })(document);

function showElement(id) {
    // document.getElementById('1').lastChild.style.display = 'none';
    // alert(document.getElementById(`${id}`).getElementsByClassName('courses--link'));
    // alert(document.getElementById('1').querySelector('.courses--link').display);
    // alert(x);
    // let id = x;
    
    if (   document.getElementById(`${id}`).querySelector('.courses--link').style.display == '' 
        || document.getElementById(`${id}`).querySelector('.courses--link').style.display== 'none') {
        document.getElementById(`${id}`).querySelector('.courses--link').style.display = 'flex';
        document.getElementById(`${id}`).querySelector('.svg-icon').style.transform = 'rotate(180deg)';
    } else if ( document.getElementById(`${id}`).querySelector('.courses--link').style.display = 'flex') {
        document.getElementById(`${id}`).querySelector('.courses--link').style.display = 'none';
        document.getElementById(`${id}`).querySelector('.svg-icon').style.transform = 'rotate(0deg)';
    }
}