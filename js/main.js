import { frases } from './data.js';

let getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

function decodeString(str) {
	let p = [];
	for (let i = 0; i < str.length; i++) {
		p.push(String.fromCharCode(str.charCodeAt(i) - 13));
	}
	return p.join('');
}

let burgerElement = document.getElementById('burger');
burgerElement.onclick = showFrase;

function hasEnded(event) {
	if (event.type === 'animationend') {
		return true;
	} else return false;
}

let harpsxf = new Audio('./audio/harp.m4a');
function showFrase() {
	burgerElement.style.animation = 'rise 1s ease-in-out infinite';
	burgerElement.style.animationIterationCount = 1;
	burgerElement.style.animationFillMode = 'forwards';
	harpsxf.play();
	burgerElement.addEventListener(
		'animationend',
		() => {
			let indicator = document.getElementById('indicator-text');
			indicator.style.display = 'none';
			let fraseHeader = document.createElement('span');
			fraseHeader.innerText = 'La burger mágica ha hablado:';
			fraseHeader.classList.add('frase-header');
			let frasesSpan = document.createElement('span');
			frasesSpan.innerText = '"' + decodeString(frases[getRandomInt(frases.length)]) + '"';
			let burgerDiv = document.getElementById('burger');
			document.getElementById('big-container').removeChild(burgerDiv);
			frasesSpan.classList.add('frase');
			document.getElementById('logo').classList.add('logo-container');
			document.getElementById('frase_container').appendChild(fraseHeader);
			document.getElementById('frase_container').appendChild(frasesSpan);
		},
		false
	);
}
