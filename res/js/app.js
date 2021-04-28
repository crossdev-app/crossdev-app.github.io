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
let menuList = document.querySelectorAll('.menu-list');
let contInfo = document.querySelector('.container-info');
let lamp = document.querySelector('.lamp');
let centerTextBox = document.querySelector('.text-center');
let clsBtn = document.querySelector('.cls-btn span');

// Class

class CardInfo {

}

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
        menuList[0].style.transform = 'RotateZ(-90deg) TranslateY(0)';
    }, 1800);
    setTimeout(() => {
        socIcon[1].classList.add('w-hover');
        menuList[1].style.transform = 'RotateZ(-90deg) TranslateY(0)';
    }, 2000);
    setTimeout(() => {
        socIcon[2].classList.add('w-hover');
        menuList[2].style.transform = 'RotateZ(-90deg) TranslateY(0)';
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

function openCard() {
    contInfo.style.width = '50vw';        
    setTimeout(() => {
        contInfo.style.height = '100vh';
        contInfo.style.top = '0';
    }, 300);
    setTimeout(() => {
        clsBtn.style.opacity = '1';
    }, 700);
    lamp.style.transform = 'TranslateX(-20vw)';
    centerTextBox.style.transform = 'translate(-35vw, -50%)';
}

function closeCard() {
    setTimeout(() => {
        contInfo.style.width = '0';
        lamp.style.transform = 'TranslateX(0px)';
        centerTextBox.style.transform = 'translate(-50%, -50%)';        
    }, 500);
    setTimeout(() => {
        contInfo.style.height = '5px';
        contInfo.style.top = '50%';    
    }, 200);
    clsBtn.style.opacity = '0';
}

// Execution
btnOn.addEventListener('click', () => pushOn());
menuList.forEach((item)=>{
    item.addEventListener('click', ()=>{
        openCard();
    });
});
clsBtn.addEventListener('click', ()=>{
    closeCard();
});
