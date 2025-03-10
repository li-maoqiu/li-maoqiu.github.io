async function 然后(){
document.getElementById("style").innerHTML=`
.elem{transition:all 2s ease-out;position:relative;display:inline-block;}
@keyframes fadeOut{from{opacity:1;}to{opacity:0;visibility:hidden;}}
`;
document.getElementById("然后1").style.display="none";
const container=document.getElementById('然后2');
container.style.display="";
const text='从山顶一跃而下。';

for(let i=-2;i<text.length;i++){
if(i>=0){container.textContent+=text[i];}
await new Promise(resolve=>setTimeout(resolve,140));
}

const elements=document.querySelectorAll('.elem');
const viewportHeight=window.innerHeight;
let completed=0;
const total=elements.length;

elements.forEach(element=>{
element.style.display='';
element.style.transform='';
void element.offsetHeight;
});

setTimeout(()=>{
elements.forEach((element,index)=>{
const elementHeight=element.offsetHeight;
const randomY=viewportHeight+elementHeight+Math.random()*200;
const randomAngle=(Math.random()-0.5)*180;
const duration=2+Math.random()*3;
const delay=(total-index-1)*0.3;
element.style.transform=`translateY(${randomY}px) rotate(${randomAngle}deg)`;
element.style.transition=`transform ${duration}s ease-in-out ${delay}s`;
element.addEventListener('transitionend',function handler(e){
if(e.propertyName !=='transform')return;
let 渐隐='fadeOut 2s ease-out forwards';
element.style.animation=渐隐;
document.getElementById("书名").style=渐隐;
completed++;
if(completed===total){
document.title="�� - 第〇页";
}
},{once:true});
});
},1000);
}