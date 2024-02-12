//animation
const text = "A cup of tea is a moment of calm in the chaos of life";
const container = document.getElementById('animation');
const speed = 70;
let index = 0;

function typeLetter() {
	container.innerHTML += text.charAt(index);
	index++;

	if (index < text.length) {
		setTimeout(typeLetter, speed);
		}
}
typeLetter();

//mobile nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('.mobile-nav-wrapper');

mobileNavOpenBtn.onclick = function (){
	mobileNav.classList.toggle('mobile-nav-wrapper-open');
}
mobileNavCloseBtn.onclick = function (){
	mobileNav.classList.remove('mobile-nav-wrapper-open');
}