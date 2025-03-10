async function 然后(){
document.getElementById("style").innerHTML=`
.elem{transition:all 2s ease-out;position:relative;display:inline-block;}
@keyframes fadeOut{from{opacity:1;}to{opacity:0;visibility:hidden;}}
`;
document.getElementById("然后1").style.display="none";
const container=document.getElementById('然后2');
container.style.display="";
const text='从山顶一跃而下。';

for(let i=0;i<text.length;i++){
container.textContent+=text[i];
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
element.style.animation='fadeOut 2s ease-out forwards';
completed++;
/* if(completed===total){} //动画结束 */
},{once:true});
});
},1000);
}