let artboardSVGArray = [
	'./usable-svg/artboard-1.svg',
	'./usable-svg/artboard-2.svg',
	'./usable-svg/artboard-3.svg',
	'./usable-svg/artboard-4.svg',
	'./usable-svg/artboard-5.svg',
	'./usable-svg/artboard-6.svg'
];

for (let i = 0; i < 6; i++)
	fetch(artboardSVGArray[i]).then((response) => response.text()).then((svgData) => {
		document.querySelector('#artboard').innerHTML += svgData;
	});

function addClassToSVG() {
	let i = 0;
	document.querySelectorAll('#artboard svg').forEach((element) => {
		element.setAttribute('class', 'artboard-number-' + i);
		element.classList.add('artboard-svg');
		i++;
	});
}

// function placeSVG() {
// 	let svgArray = document.querySelectorAll('.artboard-svg');
// 	let svgWidth = window.innerWidth;
// 	let svgHeight = window.innerHeight;
// 	for (let i = 0; i < svgArray.length; i++) {
// 		let multiplyBy = svgArray[i].classList[0].charAt(16);
// 		svgArray[i].setAttribute('viewBox', `${svgWidth * multiplyBy} 0 430 247`);
// 	}
// }

let startAudio = document.querySelector("#myAudio");
window.onload = function () {
    startAudio.play();
		startAudio.currentTime = 5;
		startAudio.muted = false;
}