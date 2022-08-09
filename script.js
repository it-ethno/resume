let portraitIcon = document.querySelector('#portraitIcon');
let portraitBig = document.querySelector('#portraitBig');
let alltainer = document.querySelector('#alltainer');
let credits = document.querySelector('#creditsPanel');

portraitIcon.addEventListener('click', showPortrait);
document.querySelectorAll('.biggerShot').forEach(item => { item.addEventListener('click', openBigger); });
document.querySelector('#creditsLink').addEventListener('click', showCredits);
document.querySelector('#closeBtn').addEventListener('click', () => { credits.style.visibility = 'hidden'; });

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

function showCredits() {
    credits.style.visibility = 'visible';
}
