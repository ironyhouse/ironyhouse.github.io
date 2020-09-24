// Matrix Logo
for (let i = 0; i <= 40; i++) {						// arrLength
	let rand = Math.floor(Math.random() * 4 + 15);  // strLength
	let numb = [];
	for (let i = 0; i < rand; i++) {				
		numb.push(Math.floor(Math.random() * 2));	// 0 or 1
	}
	numb = numb.join('');
	document.getElementById('matrix').appendChild(document.createElement('b')).innerHTML = numb;  //addStr
}



// Arrow Up
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
			scrolled = scrolled - 100; //100 - скорость прокрутки
			timer = setTimeout(scrollToTop, 10);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}



// Show Elements
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



// Portfolio check
function showPortfolioElements(classElement) {
	for (let i = 0; i < document.getElementsByClassName('portfolio_check')[0].querySelectorAll('div').length; i++) {
		document.getElementsByClassName('portfolio_check')[0].querySelectorAll('div')[i].classList.remove('text_check');
	}
	document.getElementById(classElement).classList.add('text_check');


	for (let i = 0; i < document.getElementsByClassName('portfolio_items').length; i++) {
		document.getElementsByClassName('portfolio_items')[i].style.display = 'none';
	}
	for (let i = 0; i < document.getElementsByClassName(classElement).length; i++) {
		document.getElementsByClassName(classElement)[i].style.display = 'flex';
	}
}

// Portfolio matrix
document.querySelector('.portfolio_container--item_1').addEventListener("mousemove", function(e) {
	const skewItem = document.querySelector('.portfolio_container--item_1').getBoundingClientRect();
	const imageCenterX = skewItem.left + skewItem.width / 2;
	const imageCenterY = skewItem.top + skewItem.height / 2;

	const clientX = e.clientX;
	const clientY = e.clientY;

	const xCalc = (clientX - imageCenterX) * 0.0000015;
	const yCalc = (clientY - imageCenterY) * 0.0000015;


	document.querySelector('.portfolio_container--item_1').style.setProperty("--x-translate", `${xCalc}`);
	document.querySelector('.portfolio_container--item_1').style.setProperty("--y-translate", `${yCalc}`);
});
document.querySelector(".portfolio_container--item_2").addEventListener("mousemove", function(e) {
	const skewItem = document.querySelector(".portfolio_container--item_2").getBoundingClientRect();
	const imageCenterX = skewItem.left + skewItem.width / 2;
	const imageCenterY = skewItem.top + skewItem.height / 2;
	const clientX = e.clientX;
	const clientY = e.clientY;
	const xCalc = (clientX - imageCenterX) * 0.0000015;
	const yCalc = (clientY - imageCenterY) * 0.0000015;
	document.querySelector(".portfolio_container--item_2").style.setProperty("--x-translate", `${xCalc}`);
	document.querySelector(".portfolio_container--item_2").style.setProperty("--y-translate", `${yCalc}`);
});
document.querySelector(".portfolio_container--item_3").addEventListener("mousemove", function(e) {
	const skewItem = document.querySelector(".portfolio_container--item_3").getBoundingClientRect();
	const imageCenterX = skewItem.left + skewItem.width / 2;
	const imageCenterY = skewItem.top + skewItem.height / 2;
	const clientX = e.clientX;
	const clientY = e.clientY;
	const xCalc = (clientX - imageCenterX) * 0.0000015;
	const yCalc = (clientY - imageCenterY) * 0.0000015;
	document.querySelector(".portfolio_container--item_3").style.setProperty("--x-translate", `${xCalc}`);
	document.querySelector(".portfolio_container--item_3").style.setProperty("--y-translate", `${yCalc}`);
});
document.querySelector(".portfolio_container--item_4").addEventListener("mousemove", function(e) {
	const skewItem = document.querySelector(".portfolio_container--item_4").getBoundingClientRect();
	const imageCenterX = skewItem.left + skewItem.width / 2;
	const imageCenterY = skewItem.top + skewItem.height / 2;
	const clientX = e.clientX;
	const clientY = e.clientY;
	const xCalc = (clientX - imageCenterX) * 0.0000015;
	const yCalc = (clientY - imageCenterY) * 0.0000015;
	document.querySelector(".portfolio_container--item_4").style.setProperty("--x-translate", `${xCalc}`);
	document.querySelector(".portfolio_container--item_4").style.setProperty("--y-translate", `${yCalc}`);
});
document.querySelector(".portfolio_container--item_5").addEventListener("mousemove", function(e) {
	const skewItem = document.querySelector(".portfolio_container--item_5").getBoundingClientRect();
	const imageCenterX = skewItem.left + skewItem.width / 2;
	const imageCenterY = skewItem.top + skewItem.height / 2;
	const clientX = e.clientX;
	const clientY = e.clientY;
	const xCalc = (clientX - imageCenterX) * 0.0000015;
	const yCalc = (clientY - imageCenterY) * 0.0000015;
	document.querySelector(".portfolio_container--item_5").style.setProperty("--x-translate", `${xCalc}`);
	document.querySelector(".portfolio_container--item_5").style.setProperty("--y-translate", `${yCalc}`);
});
document.querySelector(".portfolio_container--item_6").addEventListener("mousemove", function(e) {
	const skewItem = document.querySelector(".portfolio_container--item_6").getBoundingClientRect();
	const imageCenterX = skewItem.left + skewItem.width / 2;
	const imageCenterY = skewItem.top + skewItem.height / 2;
	const clientX = e.clientX;
	const clientY = e.clientY;
	const xCalc = (clientX - imageCenterX) * 0.0000015;
	const yCalc = (clientY - imageCenterY) * 0.0000015;
	document.querySelector(".portfolio_container--item_6").style.setProperty("--x-translate", `${xCalc}`);
	document.querySelector(".portfolio_container--item_6").style.setProperty("--y-translate", `${yCalc}`);
});