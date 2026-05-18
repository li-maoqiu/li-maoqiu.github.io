const novelData=[
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
{name:"测试",desc:"测试测试",star:5},
];

function getHourFixedSort(){
let nowHour=new Date().getHours();
return novelData.map(item=>{
    let score=item.star*20+nowHour*3+item.name.charCodeAt(0);
    return{...item, score};
}).sort((a,b)=>b.score - a.score);
}

function getStarStr(star){
let str="";
for(let i=0;i<5;i++){
    str+=i < star?"★" :"☆";
}
return str;
}

function renderRank(){
let sortArr=getHourFixedSort();
let top9=sortArr.slice(0,9);
let rest=sortArr.slice(9);

let topHtml="";
top9.forEach((item,idx)=>{
    topHtml+=`
    <div class="rank-item">
        <div class="rank-num">${idx+1}</div>
        <div class="book-main">
            <div class="book-name">${item.name}</div>
            <div class="book-desc">${item.desc}</div>
            <div class="star">${getStarStr(item.star)}</div>
        </div>
    </div>
    `;
});
document.getElementById("top9List").innerHTML=topHtml;

let restHtml="";
rest.forEach((item,idx)=>{
    restHtml+=`
    <div class="rank-item">
        <div class="rank-num">${idx+10}</div>
        <div class="book-main">
            <div class="book-name">${item.name}</div>
            <div class="book-desc">${item.desc}</div>
            <div class="star">${getStarStr(item.star)}</div>
        </div>
    </div>
    `;
});
document.getElementById("otherList").innerHTML=restHtml;
}
const toggleBtn=document.getElementById("toggleBtn");
const otherList=document.getElementById("otherList");
toggleBtn.addEventListener("click",()=>{
otherList.classList.toggle("show");
toggleBtn.innerText=otherList.classList.contains("show")?"收起" :"展开完整榜单";
});
renderRank();