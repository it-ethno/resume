let portraitIcon = document.querySelector('#portraitIcon');
let portraitBig = document.querySelector('#portraitBig');
let alltainer = document.querySelector('#alltainer');

portraitIcon.addEventListener('click', showPortrait);
document.querySelectorAll('.biggerShot').forEach(item => { item.addEventListener('click', openBigger); });

function showPortrait(e) {
    portraitBig.style.visibility = 'visible';
    portraitBig.addEventListener('click', hidePortrait);
    portraitIcon.addEventListener('click', hidePortrait);
}

function hidePortrait(e) {
    portraitIcon.removeEventListener('click', hidePortrait);
    portraitBig.style.visibility = 'hidden';
}

function openBigger(e) {
    window.open(e.target.src);
}
