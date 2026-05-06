const wordArr = ['已经','将要','注定','可能','必然','终将'];
let el = null;

function getRandWord(){
    let w;
    do{
        w = wordArr[Math.floor(Math.random() * wordArr.length)];
    }while(el && w === el.innerText);
    return w;
}
function loopChange(){
    if(!el) return;
    el.classList.add('run-glitch');
    setTimeout(()=>{
        el.innerText = getRandWord();
    }, 150);
    setTimeout(()=>{
        el.classList.remove('run-glitch');
    }, 800);
    const time = 1000 + Math.random() * 4000;
    setTimeout(loopChange, time);
}
function waitForElement() {
    el = document.getElementById('R');
    if(el) {
        loopChange();
    } else {
        setTimeout(waitForElement, 100);
    }
}
waitForElement();

let elR2 = null;
let r2Array = [];
let lastScroll = 0;
let lastWord = '';
const stepDistance = 0;

function initR2Array() {
    const text = elR2.innerText;
    r2Array = text.split('／');
    if (r2Array.length > 0) {
        lastWord = r2Array[0];
        elR2.innerText = lastWord;
    }
}

function getR2RandomWord() {
    if (r2Array.length <= 1) return r2Array[0] || '';
    let w;
    do {
        w = r2Array[Math.floor(Math.random() * r2Array.length)];
    } while (w === lastWord);
    return w;
}

function waitForR2() {
    elR2 = document.getElementById('R2');
    if (elR2) {
        initR2Array();
        startScrollRandom();
    } else {
        setTimeout(waitForR2, 100);
    }
}

function startScrollRandom() {
    window.addEventListener('scroll', () => {
        const now = window.scrollY;
        const diff = Math.abs(now - lastScroll);

        if (diff >= stepDistance) {
            const newWord = getR2RandomWord();
            lastWord = newWord;

            elR2.classList.add('run-glitch');
            setTimeout(() => {
                elR2.innerText = newWord;
            }, 150);
            setTimeout(() => {
                elR2.classList.remove('run-glitch');
            }, 800);

            lastScroll = now;
        }
    });
}

waitForR2();