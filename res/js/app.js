// Variable declaration
let btnOn = document.getElementById('onPos');
let btnoff = document.getElementById('offPos');
let btnShadow = document.getElementById('shadowBtn');
let isON = false;
let swtch = document.getElementById('switch');
let boxSW = document.getElementById('boxSW');
let bulb = document.getElementById('bulb');
let lightning = document.getElementById('lightning');
let word1 = document.getElementById('word1');
let word2 = document.getElementById('word2');
let brand = document.getElementById('brand');
let findMeTXT = document.getElementById('subTitle');
let socIcon = document.querySelectorAll('.soc-icon');
let overlayBG = document.querySelector('.overlay');



// Function Creation

function pushOn() {
    isON = true;
    btnShadow.style.top = 'auto';
    btnShadow.style.bottom = 0;
    btnOn.style.backgroundColor = '#ccc';
    btnoff.style.backgroundColor = '#bbb';
    disapear(swtch);
}


function disapear(obj) {
    obj.style.opacity = '0';
    setTimeout(() => {
        boxSW.style.display = 'none';
    }, 1500);
    bulbStart();
}

function bulbStart() {
    setTimeout(() => {
        bulb.setAttribute('src', 'res/img/bulb_on.png');
        lightning.style.display = 'block';
    }, 100);
    setTimeout(() => {
        bulb.setAttribute('src', 'res/img/bulb_off.png');
        lightning.style.display = 'none';
    }, 500);
    setTimeout(() => {
        bulb.setAttribute('src', 'res/img/bulb_on.png');
        lightning.style.display = 'block';
    }, 600);
    setTimeout(() => {
        bulb.setAttribute('src', 'res/img/bulb_off.png');
        lightning.style.display = 'none';
    }, 800);
    setTimeout(() => {
        bulb.setAttribute('src', 'res/img/bulb_on.png');
        lightning.style.display = 'block';
    }, 1500);
    setTimeout(() => {
        showText();
    }, 1700);
    setTimeout(() => {
        socIcon[0].classList.add('w-hover');
    }, 1800);
    setTimeout(() => {
        socIcon[1].classList.add('w-hover');
    }, 2000);
    setTimeout(() => {
        socIcon[2].classList.add('w-hover');
    }, 2200);
    setTimeout(() => {
        socIcon[3].classList.add('w-hover');
    }, 2400);
}

function showText() {
    word1.style.transform = 'TranslateX(0)';
    word2.style.transform = 'TranslateX(0)';
    brand.style.width = '200px';
    findMeTXT.style.opacity = '1';
    overlayBG.style.opacity = '0.9';

}

// Execution
btnOn.addEventListener('click', () => pushOn());
