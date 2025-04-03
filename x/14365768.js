document.getElementById("正文").innerHTML="<style>.char{display:inline-block;opacity:0;transition:all 0.6s cubic-bezier(0.68,-0.55,0.27,1.55);transform:translate(0,0) rotate(0);}.animated{opacity:1 !important;}</style>";


function animateText(htmlString){
  const container=document.getElementById('正文');
  const parser=new DOMParser();
  const doc=parser.parseFromString(htmlString,'text/html');

  function processNodes(nodes){
    nodes.forEach(node=>{
      if(node.nodeType===Node.TEXT_NODE){
        const text=node.textContent;
        const chars=text.split('').map(char=>{
          const span=document.createElement('span');
          
          if(char===' '){
            span.className='char space';
            span.innerHTML='&nbsp;';
          }else{
            span.className='char';
            span.textContent=char;
          }
          
          return span;
        });
        
        container.append(...chars);
      }else if(node.nodeType===Node.ELEMENT_NODE){
        const clonedNode=node.cloneNode(false);
        container.appendChild(clonedNode);

        if(node.childNodes.length>0){
          processNodes([...node.childNodes],clonedNode);
        }
      }
    });
  }

  processNodes([...doc.body.childNodes]);

  const maxOffset=100;
  const maxRotate=30;
  const charDelay=40;
  let charIndex=0;

  function animateNextChar(){
    const chars=container.querySelectorAll('.char:not(.space)');
    if(charIndex >=chars.length) return;

    const char=chars[charIndex];
    const progress=Math.min(1,charIndex /(chars.length*5));//偏移量
    const offset=maxOffset*progress;
    const rotate=maxRotate*progress;

    const targetX=(Math.random()-0.5)*offset*2;
    const targetY=(Math.random()-0.5)*offset;
    const targetRotate=(Math.random()-0.5)*rotate*2;

    char.style.transform='translate(0,0) rotate(0deg)';
    char.getBoundingClientRect();

    char.classList.add('animated');
    char.style.transform=`translate(${targetX}px,${targetY}px) rotate(${targetRotate}deg)`;

    charIndex++;
    setTimeout(animateNextChar,charDelay);
  }

  animateNextChar();
}

animateText(dy);