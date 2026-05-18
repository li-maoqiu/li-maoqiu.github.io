const novelData=[
  //6
 {name:"怪了 <small>恐怖 喜剧</small>",desc:"诡异怪事频发，偏偏主角一行人状况百出、笑料不断。",tip:"本来当喜剧看的，每集总是中途有人发现有哪里不对，说句「怪了」，剧情就忽然转向恐怖片了。",star:5,weight:6},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:6},

  //5
 {name:"漂流百年的爱恋 <small>恋爱 偶像</small>",desc:"她在海边拾得一个漂流瓶，费尽心力破译信中的内容，竟是数百年前一位少年写下的远行信。他说要去世界各地旅行，但不确定海的对面是什么。",tip:"测试。",star:4,weight:5},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:5},

  //4
 {name:"萌娘战争 <small>萌系</small>",desc:"“萌粒子”爆发！世界陷入危机？一场关于爱与正义的战争即将爆发——！",tip:"测试。",star:4,weight:4},
 {name:"魔法师的酒馆 <small>魔幻</small>",desc:"魔法师们齐聚于此，畅谈魔法世界的奇闻轶事。",tip:"测试。",star:1,weight:4},
 {name:"0KB <small>电竞</small>",desc:"火爆全球的网络游戏«零字节»衍生电视剧。艾默的职业是……机械师？生活职业也可以这么厉害？！",tip:"测试。",star:4,weight:4},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:4},

  //3
 {name:"青青菜园 <small>卡通</small>",desc:"菜园里蔬菜们安居乐业，两只羊听说了这里的菜汁多叶嫩，搬到菜园附近想要偷菜来吃……",tip:"测试。",star:2,weight:3},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:3},

  //2
 {name:"G.K.Boy <small>卡通 科幻</small>",desc:"通过基因改造的博士意图组建兵器军团征服世界，为阻止他的阴谋，G.K.Boy挺身而出。",tip:"测试。",star:4,weight:2},
 {name:"火锅世界 <small>卡通</small>",desc:"天地初开，一切结为混沌，阴阳交合，阴阳二气生成万物……",tip:"测试。",star:3,weight:2},
 {name:"公寓保安守则 <small>悬疑</small>",desc:"看似平常的公寓，只是每个人都疲惫无比，连小孩子摆弄玩具都有气无力。这里有一篇“公寓保安守则”，却记录着许多奇怪的规则……改编自经典解谜游戏。",tip:"测试。",star:4,weight:2},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:2},

  //1
 {name:"兽耳公园 <small>萌系 末世</small>",desc:"文明崩塌后的末世荒原，兽耳族和普通人类放下旧日的隔阂，在废墟之上共建起最后的家园。",tip:"测试。",star:4,weight:1},
 {name:"兽耳公园2 <small>萌系 末世</small>",desc:"在人类的带领下，兽耳族也重获新生。",tip:"测试。",star:1,weight:1},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:1},

  //0
 {name:"猫球和二扯的日常 <small>日常</small>",desc:"在很久很久以前，万事万物还未被创立之时，有一位创世神……开始了他的艺术创作。",tip:"测试。",star:3,weight:0},
  //{name:" <small></small>",desc:"",tip:"",star:,weight:0},
];

const adData=[
 {name:"虚拟裂痕 <small>游戏</small>",desc:"现实与虚拟结合，在现实世界与怪物决战，快来吧，特工，为现实而战。",tip:"测试。"},
 {name:"零字节 <small>游戏</small>",desc:"在奇幻的世界里完成属于你的冒险。风靡全球的大型多人在线游戏。",tip:"测试。"},
 {name:"金网 <small>卡片科技</small>",desc:"稳定快速的数据传输方案。",tip:"测试。"},
 {name:"“弱宝”系列 <small>卡片科技</small>",desc:"最可爱的机器人，陪伴你度过最快乐的时光。",tip:"测试。"},
  //{name:" <small></small>",desc:"",tip:""},
];

const comicTip=document.getElementById('comicTip');
function showTip(text){
  comicTip.innerText=text;
  comicTip.style.display='block';
  
  setTimeout(()=>{
    const tipHeight=comicTip.offsetHeight;
    const windowHeight=window.innerHeight;
    if(tipHeight+40>windowHeight){
      comicTip.style.bottom='40px';
      comicTip.style.maxHeight=(windowHeight - 20)+'px';
      comicTip.style.overflowY='auto';
    }else{
      comicTip.style.bottom='50px';
      comicTip.style.maxHeight='none';
      comicTip.style.overflowY='visible';
    }
  },0);
}
function hideTip(){
  comicTip.style.display='none';
}

document.addEventListener('click',(e)=>{
  if(!e.target.closest('.rank-item')&&!e.target.closest('.ad-item')){
    hideTip();
  }
});

function shuffleArray(arr){
  let newArr=[...arr];
  for(let i=newArr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [newArr[i],newArr[j]]=[newArr[j],newArr[i]];
 }
  return newArr;
}

function getHourFixedSort(){
  const now=new Date();
  const today=now.getDate();
  const hour=now.getHours();
  let seed=today*100+hour;

  function random(){
    const x=Math.sin(seed++)*10000;
    return x-Math.floor(x);
 }

  return novelData.map(item=>{
    const score=item.weight*60+random()*400+item.star*80;
    return{...item,score};
 }).sort((a,b)=>b.score-a.score);
}

function getStarStr(star){
  let str="";
  for(let i=0;i<5;i++){
    str+=i<star?"★":"☆";
 }
  return str;
}

function renderRank(){
  const sortArr=getHourFixedSort();
  const top9=sortArr.slice(0,9);
  const rest=sortArr.slice(9);

  const shuffledAds=shuffleArray(adData);
  let adIndex=0;

  let topHtml="";
  top9.forEach((item,idx)=>{
    topHtml+=`
    <div class="rank-item" onclick="showTip('${item.tip.replace(/'/g,"\\'")}')">
      <div class="rank-num">${idx+1}</div>
      <div class="book-main">
        <div class="book-name">${item.name}</div>
        <div class="book-desc">${item.desc}</div>
        <div class="star">${getStarStr(item.star)}</div>
      </div>
    </div>
  `;

    if((idx+1)>=3&&(idx+1-3)%6===0){
      if(adIndex<shuffledAds.length){
        const ad=shuffledAds[adIndex];
        topHtml+=`
        <div class="ad-item" onclick="showTip('${ad.tip.replace(/'/g,"\\'")}')">
          <div class="ad-tag">AD</div>
          <div class="book-main">
            <div class="book-name">${ad.name}</div>
            <div class="book-desc">${ad.desc}</div>
          </div>
        </div>
        `;
        adIndex++;
     }
   }
});
  document.getElementById("top9List").innerHTML=topHtml;

  let restHtml="";
  rest.forEach((item,idx)=>{
    const realIndex=idx+9;
    restHtml+=`
    <div class="rank-item" onclick="showTip('${item.tip.replace(/'/g,"\\'")}')">
      <div class="rank-num">${idx+10}</div>
      <div class="book-main">
        <div class="book-name">${item.name}</div>
        <div class="book-desc">${item.desc}</div>
        <div class="star">${getStarStr(item.star)}</div>
      </div>
    </div>
  `;

    if((realIndex+1)>=3&&(realIndex+1-3)%6===0){
      if(adIndex<shuffledAds.length){
        const ad=shuffledAds[adIndex];
        restHtml+=`
        <div class="ad-item" onclick="showTip('${ad.tip.replace(/'/g,"\\'")}')">
          <div class="ad-tag">AD</div>
          <div class="book-main">
            <div class="book-name">${ad.name}</div>
            <div class="book-desc">${ad.desc}</div>
          </div>
        </div>
        `;
        adIndex++;
     }
   }
});
  document.getElementById("otherList").innerHTML=restHtml;
}

const toggleBtn=document.getElementById("toggleBtn");
const otherList=document.getElementById("otherList");
toggleBtn.addEventListener("click",()=>{
  otherList.classList.toggle("show");
  toggleBtn.innerText=otherList.classList.contains("show")?"收起":"展开完整榜单";
});

renderRank();