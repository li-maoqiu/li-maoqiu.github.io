const wordArr = ['已经','将要','注定'];

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