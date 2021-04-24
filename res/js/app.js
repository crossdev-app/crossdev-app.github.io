// Variable declaration
let btnOn = document.getElementById('onPos');
let btnoff = document.getElementById('offPos');
let btnShadow = document.getElementById('shadowBtn');
let isON = false;
let swtch = document.getElementById('switch');
let boxSW = document.getElementById('boxSW');
let bulb = document.getElementById('bulb');
let lightning  = document.getElementById('lightning');



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

function bulbStart(){
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
}

// Execution
btnOn.addEventListener('click', ()=> pushOn());