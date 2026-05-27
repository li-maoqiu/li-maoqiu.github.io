const novelData=[
//6
{name:"漂流百年的爱恋 <small>恋爱 偶像</small>",desc:"毕业旅行，来到梦想中的城市，在海边捡到一个漂流瓶，开启一段浪漫的邂逅。",tip:"好像挺火的，之前诺伊追过这个剧，我跟着看过一会儿。\\n我记得女主在漂流瓶里找到一封信，写着一个男生要去全世界旅行。女主拿去鉴定，发现这个漂流瓶来自一百年前。既然是恋爱偶像剧，女主肯定会见到他吧？",star:5,weight:6},
//{name:" <small></small>",desc:"",tip:"",star:,weight:6},

//5
{name:"怪了 <small>恐怖 喜剧</small>",desc:"诡异怪事频发，偏偏主角一行人状况百出，笑料不断。",tip:"本来当喜剧看的，中途有角色发现有哪里不对，说句「怪了」，剧情就忽然转向恐怖片了。\\n好像每集都是这个流程。",star:4,weight:5},
//{name:" <small></small>",desc:"",tip:"",star:,weight:5},

//4
{name:"萌娘战争 <small>萌系</small>",desc:"“萌粒子”爆发！世界陷入萌化危机？一场关于萌与正义的战争即将爆发——！",tip:"“萌粒子”……感觉和“摩恩粒子”好像啊。",star:4,weight:4},
{name:"魔法师的酒馆 <small>魔幻</small>",desc:"魔法师们齐聚于此，畅谈魔法世界的奇闻轶事。",tip:"伪装成电视剧，让角色装作“魔法师的闲聊”，实际是播报生物圈之外的新闻……总觉得多此一举。",star:1,weight:4},
{name:"0KB <small>电竞</small>",desc:"艾默的职业是……机械师？生活职业也可以这么厉害？！火爆全球的大型多人在线网络游戏«零字节»正版IP授权。",tip:"哦，这个游戏，我之前玩过……但好像忘记账号和密码了。",star:4,weight:4},
//{name:" <small></small>",desc:"",tip:"",star:,weight:4},

//3
{name:"青青菜园 <small>卡通 喜剧</small>",desc:"菜园里蔬菜们安居乐业，两只羊听说了这里的菜汁多叶嫩，搬到菜园附近想要偷菜吃。勇敢的蔬菜们与两只蠢羊斗智斗勇。",tip:"虽然两只羊是反派，但我反而更讨厌那群蔬菜……诺伊好像挺喜欢的，我要注意别和她聊这个。",star:2,weight:3},
//{name:" <small></small>",desc:"",tip:"",star:,weight:3},

//2
{name:"G.K.Boy <small>卡通 科幻</small>",desc:"通过基因改造的邪恶博士，意图组建兵器军团征服世界，快阻止他的阴谋！G.K.Boy挺身而出！",tip:"全是枪械和暴力的儿童动画。",star:4,weight:2},
{name:"火锅世界 <small>卡通 喜剧</small>",desc:"天地初开，一切结为混沌，阴阳交合，阴阳二气生成万物……",tip:"简介是不是显示错了？和名字毫无关系啊。",star:3,weight:2},
{name:"公寓保安守则 <small>悬疑 游戏改</small>",desc:"看似平常的公寓，每个人都疲惫无比，连小孩子摆弄玩具都有气无力。有一篇“公寓保安守则”，却记录着许多奇怪的规则……改编自经典解谜游戏。",tip:"之前好像挺火来着，对这个题材没兴趣就没看。",star:4,weight:2},
//{name:" <small></small>",desc:"",tip:"",star:,weight:2},

//1
{name:"兽耳公园 <small>萌系 末世</small>",desc:"文明崩塌后的末世荒原，兽耳族和普通人类放下旧日的隔阂，在废墟之上共建起最后的家园。",tip:"听说主创是希望通过这个动画，改善歧视兽化病的社会现象，动画做的不错，角色们都挺可爱的。",star:4,weight:1},
{name:"兽耳公园2 <small>萌系 末世</small>",desc:"在人类的带领下，兽耳族也重获新生，重建城市，想着美好未来前进。",tip:"质量完全不如第一季，剧情也烂，居然变成人类领导兽耳族了。",star:1,weight:1},
//{name:" <small></small>",desc:"",tip:"",star:,weight:1},

//0

//-10
{name:"猫球和二扯的日常 <small>日常 漫改</small>",desc:"在很久很久以前，万事万物还未被创立之时，有一位创世神……开始了他的艺术创作。",tip:"没听说过。",star:3,weight:-10},
//{name:" <small></small>",desc:"",tip:"",star:,weight:0},

//？
//{name:" <small></small>",desc:"",tip:"",star:,weight:},
//{name:" <small></small>",desc:"",tip:"",star:,weight:},
];

const adData=[
{name:"虚拟裂痕 <small>游戏</small>",desc:"现实与虚拟结合，在现实世界与怪物决战，快来吧，特工，为现实而战。",tip:"有时候会在街上看到有人在玩，好像挺有意思的。"},
{name:"零字节 <small>游戏</small>",desc:"在奇幻的世界里完成属于你的冒险。风靡全球的大型多人在线游戏。",tip:"我记得这个游戏……但不记得账号密码了。"},
{name:"金网 <small>卡片科技</small>",desc:"稳定快速的数据传输方案。",tip:"开启一个小型传送阵，让无线数据从中传输……总觉得大材小用了。"},
{name:"“弱宝”系列 <small>卡片科技</small>",desc:"最可爱的机器人，陪伴你度过最快乐的时光。",tip:"都是些没什么用的机器人，但确实挺可爱的，想买一个。"},
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
    let finalStar=item.star;
    const r=random();
    if(r<0.1){
      let delta=r<0.15?1:-1;
      finalStar=Math.max(1,Math.min(5,finalStar+delta));
    }

    const score=item.weight*200+random()*500+finalStar*80;
    return {...item,star:finalStar,score};
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

  let timeStr = new Date().getFullYear() + "年" + String(new Date().getMonth()+1).padStart(2,0) + "月" + String(new Date().getDate()).padStart(2,0) + "日 " + String(new Date().getHours()).padStart(2,0) + ":00";
  let topHtml="<div class='timeStr'>　　更新时间："+timeStr+"</div><br>";

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

//本页代码有使用 豆包AI 辅助。