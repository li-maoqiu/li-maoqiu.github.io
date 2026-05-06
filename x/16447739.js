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

let isCooling = false;
const COOLDOWN_TIME = 500;

function initR2Array() {
    const text = elR2.innerText;
    r2Array = text.split('／');
    
    if (r2Array.length > 0) {
        lastWord = r2Array[0];

        let longestText = '';
        r2Array.forEach(item => {
            if (item.length > longestText.length) longestText = item;
        });

        elR2.innerText = longestText;
        elR2.style.visibility = 'hidden';
        elR2.style.whiteSpace = 'pre-wrap';
        elR2.style.wordBreak = 'break-word';
        
        const realText = document.createElement('span');
        realText.id = 'R2-real-text';
        realText.innerText = lastWord;
        realText.style.position = 'absolute';
        realText.style.inset = '0';
        realText.style.whiteSpace = 'pre-wrap';
        realText.style.wordBreak = 'break-word';
        realText.style.visibility = 'visible';
        
        elR2.style.position = 'relative';
        elR2.appendChild(realText);
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
        if (isCooling) return;

        const now = window.scrollY;
        const diff = Math.abs(now - lastScroll);

        if (diff >= stepDistance) {
            isCooling = true;

            const newWord = getR2RandomWord();
            lastWord = newWord;
            const textEl = document.getElementById('R2-real-text');

            textEl.classList.add('run-glitch');
            setTimeout(() => {
                textEl.innerText = newWord;
            }, 150);
            setTimeout(() => {
                textEl.classList.remove('run-glitch');
                isCooling = false;
            }, 800);

            lastScroll = now;
        }
    });
}

waitForR2();