/*
<span>/res message <input type="text" placeholder="领地ID"> enter <input type="text" placeholder="文字"> <a onclick="复制指令(event)">复制</a></span><br>
<span>/pt <input type="text" placeholder="玩家名"> <a onclick="复制指令(event)">复制</a></span><br>
*/

function 复制指令(event) {
    const button=event.target;
    const parentDiv=button.parentElement;
    const clonedDiv=parentDiv.cloneNode(true);
    clonedDiv.querySelectorAll('a').forEach(btn=>btn.remove());
    clonedDiv.querySelectorAll('input').forEach(input=>{
      const textNode = document.createTextNode(input.value);
      input.replaceWith(textNode);
    });
    let command=clonedDiv.textContent
      .replace(/\s+/g, ' ')
      .replace(new RegExp('　',"g"),"")
      .trim();
      复(command)
  }