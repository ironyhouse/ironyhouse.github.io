/* Up Button */
window.onload = function(){
	//window.scrollTo(x,y)
	var scrolled;
	var timer;

	document.getElementById('up').onclick = function(){
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 300; //100 - скорость прокрутки
			timer = setTimeout(scrollToTop, 50);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}

function showElement(id) {    
    if (   document.getElementById(`${id}`).nextElementSibling.style.display == '' 
        || document.getElementById(`${id}`).nextElementSibling.style.display== 'none') {
        document.getElementById(`${id}`).nextElementSibling.style.display = 'flex';
        document.getElementById(`${id}`).querySelector('.svg-icon').style.transform = 'rotate(180deg)';
    } else if ( document.getElementById(`${id}`).nextElementSibling.style.display = 'flex') {
        document.getElementById(`${id}`).nextElementSibling.style.display = 'none';
        document.getElementById(`${id}`).querySelector('.svg-icon').style.transform = 'rotate(0deg)';
    }
}