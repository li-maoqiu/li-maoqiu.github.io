
let dy1js="<meta name='viewport' content='width=device-width, initial-scale=1'>",wzjm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",次数=0,制,乱,示,锁,临时,index_dy1js="",dwb="",dwd="0",临时0;
let 子页面=["0",""];if(top.location!=self.location){子页面=["1","../"]}
let 统一=["../0/2/"];
let 最后执行={};
let 代码={
    "博客":"https://limaoqiu.com/",
    "六维评分":[,6,"体质","力量","敏捷","智慧","运气","命数"],
    "猫cafe":"https://猫.cafe/",
    "猫":"https://猫.cafe/w/",
};

const _执行a={
    "解锁":(i)=>{dy1js+="<span id='"+i+"' onclick=\"解(锁='"+i+"／"+临时0[1]+"')\" class='zhushi jiesuo'></span>"},
    "自动解锁":()=>{锁="／"+临时0[1];解();dy1js+="<div class='zhushi jiesuo'>"+锁+"</div>"},
    "js":"自动解锁",
    "x":(i)=>{dy1js+="<span id='"+i+"' onclick=\"解(锁='"+i+"／"+临时0[1]+"／异梦笔记x')\" class='zhushi jiesuo'></span>"},
    "xx":()=>{锁="／"+临时0[1]+"／异梦笔记x";解();dy1js+="<div class='zhushi jiesuo'>"+锁+"</div>"},
    "提示":()=>{dy1js+="<span class=\"提示\" data-msg=\""+临时0[2]+"\">"+临时0[1]+"</span>"},
    "提示2":()=>{dy1js+="<div class='提'>"+临时0[1]+"<span class='示'>"+临时0[2]+"</span></div>"},
    "复制":()=>{if(!临时0[2]){临时0[2]=临时0[1];临时0[1]="复制"}dy1js+="<a onclick=\"复(制='"+临时0[2]+"')\">"+临时0[1]+"</a>"},
    "图片":()=>{if(临时0[1].indexOf(".")==-1){临时0[1]+=".jpg"}dy1js+="<a onclick=\"复(制='"+临时0[1]+"')\" href='"+子页面[1]+"2/"+临时0[1]+"' target='_blank'><img src='"+子页面[1]+"2/"+临时0[1]+"' width="+临时0[2]+" "+临时0[3]+" class='bdtp'></a>"},
    "本地图片":()=>{if(临时0[1].indexOf(".")==-1){临时0[1]+=".jpg"}dy1js+="<a onclick=\"复(制='"+临时0[1]+"')\" href='"+子页面[1]+统一[0]+临时0[1]+"' target='_blank'><img src='"+子页面[1]+统一[0]+临时0[1]+"' onerror=\"this.src='"+子页面[1]+"2/0.jpg';this.onerror=null;\" width="+临时0[2]+" "+临时0[3]+" class='bdtq'></a>"},
    "音频":()=>{if(临时0[1].indexOf(".")==-1){临时0[1]+=".mp3"}dy1js+="<audio class='bdtp' src='"+子页面[1]+"2/"+临时0[1]+"' controls></audio>"},
    "本地音频":()=>{if(临时0[1].indexOf(".")==-1){临时0[1]+=".mp3"}dy1js+="<audio class='bdtq' src='"+子页面[1]+统一[0]+临时0[1]+"' controls></audio>"},
    "展示":(i)=>{dy1js+="<a onclick=\"展(示='"+i+"／"+临时0[2]+"')\" id='zs"+i+"'><sup>["+临时0[1]+"]</sup></a>"},
    "随机":()=>{dy1js+="<div class='提'>"+临时0[1].split(",")[Math.floor(Math.random()*临时0[1].split(",").length)]+"<span class='示'>"+临时0[1]+"</span></div>"},
    "t":()=>{if(typeof(ts)!="undefined"){if(临时0[1]=="0"){ts[临时0[2]]=临时0[3];if(临时0[4]){临时0=("t,"+临时0[4]).split(",")}}if(临时0[2]&&临时0[2]>-1){if(临时0[2]=="1"){dy1js+=ts[临时0[1]]}}else{ts[临时0[1]]=ts[临时0[1]]||"（条目不存在）";dy1js+="<div class='提'>";if(临时0[2]){if(临时0[2][0]!="#"){临时0[2]=临时0[2]+".html"}dy1js+="<a href='"+临时0[2]+"'>"+临时0[1].split("_")[0]+"</a>"}else{dy1js+=临时0[1].split("_")[0]}dy1js+="<span class='示'>"+ts[临时0[1]]+"</span></div>"}}else{dy1js+=临时0[1]+"<small>(ts缺失)</small>"}},
    "ts":"t",
    "跳转":()=>{if(临时0[1]=="br"){index_dy1js+="<br>"}else if(临时0[2]){dy1js+="<a name='"+临时0[1]+"'>"+临时0[2]+"</a>";index_dy1js+="<a href='#"+临时0[1]+"'>"+临时0[2]+"</a><br>"}else{dy1js+="<a name='"+临时0[1]+"'></a>";index_dy1js+="<a href='#"+临时0[1]+"'>"+临时0[1]+"</a><br>"}},
    "h0":()=>{if(临时0[1]==0){index_dy1js+=临时0[2]+"<br>"}else if(临时0[1]==1){index_dy1js+="<div class='nav_drop'><a class='nav_drop_btn'";if(临时0[3]){index_dy1js+=" href='"+临时0[3]+"'"}index_dy1js+=">"+临时0[2]+"<small>▼</small></a><div class='nav_drop_down'>"}else if(临时0[1]==2){index_dy1js+="</div></div><br>"}},
    "h1":()=>{if(临时0[2]){}else{临时0[2]=临时0[1]}dy1js+="<a name='"+临时0[2]+"'></a><"+临时0[0]+">"+临时0[1]+"</"+临时0[0]+">";index_dy1js+="<a href='#"+临时0[2]+"'>";if(临时0[0]=="h1"){index_dy1js+="<h3>"+临时0[1]+"</h3>"}else if(临时0[0]=="h2"){index_dy1js+="<h4>"+临时0[1]+"</h4>"}else if(临时0[0]=="h3"){index_dy1js+="　<b>"+临时0[1]+"</b>"}else if(临时0[0]=="h4"){index_dy1js+="　"+临时0[1]}else if(临时0[0]=="h5"){index_dy1js+="　<small>"+临时0[1]+"</small>"}else{index_dy1js+=临时0[1]}index_dy1js+="</a><br>"},
    "h2":"h1","h3":"h1","h4":"h1","h5":"h1","h6":"h1",
    "zk":()=>{临时0[3]=临时0[3]||临时0[1];dy1js+="<a onclick=\"dw(dwb='"+临时0[2]+"',dwd='"+临时0[3]+"')\">"+临时0[1]+"</a>"},
    "http":()=>{dy1js+="<a href='"+临时0[0]+"://"+临时0[1]+"'>"+临时0[2]+"</a>"},
    "https":"http",
    "#":()=>{临时0[2]=临时0[2]||临时0[1];dy1js+="<a href='#"+临时0[1]+"'>"+临时0[2]+"</a>"},
    "六维图":()=>{最后执行["六维图"]=1;dy1js+="<div data-type=\"canvas\" height=\"200\" width=\"225\" data-maxvalue=\"";if(临时0[1]>0){dy1js+=临时0[1]}else{dy1js+=代码[临时0[1]][1]}dy1js+="\" data-value=\"";for(let i2=2;临时0.length>i2;i2++){if(i2!=2){dy1js+="|"}if(临时0[1]>0){dy1js+=临时0[i2]}else{临时0[i2]=临时0[i2].replace(/\D/g,"");dy1js+=临时0[i2]+"_"+代码[临时0[1]][i2]+临时0[i2]+"_"+临时0[i2]}}dy1js+="\" size=\"200\"></div>"},
    "密码":()=>{if(localStorage.getItem("异梦_"+临时0[1])){锁="／"+临时0[2]+"／异梦_"+临时0[1];解();dy1js+=锁}else{dy1js+="（？）"}},
    "更多":(i)=>{临时0[2]=临时0[2]||"更多";dy1js+="<span id='隐藏"+i+"' style='display:none;'><fieldset ondblclick=\"不显示('"+i+"')\"><legend>"+临时0[2]+"</legend>"+临时0[1]+"</fieldset></span><a id='显示"+i+"' onclick=\"显示('"+i+"')\">"+临时0[2]+"▿</a>"},
    "代码":()=>{if(代码[临时0[1]]){dy1js+=代码[临时0[1]]}else{alert(临时0[1]+"不存在")}},
    "a":()=>{临时0[2]=临时0[2]||临时0[1];if(临时0[2]=="0"){临时0[2]=""}dy1js+="<a name='"+临时0[1]+"'></a>"+临时0[2]},
    "s":()=>{dy1js+="<small>("+临时0[1]+")</small>"},
    "链接":()=>{临时0[3]=临时0[3]||临时0[2];dy1js+="<a href='"+代码[临时0[1]]+临时0[2]+"'>"+临时0[3]+"</a>"},
    // "":()=>{},
}
const _执行b={
    "":()=>{dy1js+="<br class='br_a'>"},
    "h0":()=>{index_dy1js+="<br>"},
    // "":()=>{},
}

if(typeof(h1)!="undefined"&&子页面[0]=="0"){
dy1js+="<h1>"+h1+"</h1>";

if(h1!="异梦笔记"){dy1js+=" <nav><a href='0.html'>总目录</a>";
for(let i=0;nav.length>i;i++){
    if(nav[i]=="搜索"){}
    else if(nav[i][0]=="t"){dy1js+=nav[i][1]}
    else if(nav[i]=="相关"){dy1js+="<br><small>相关</small>"}
    else{
        dy1js+=" / <a href='";
        if(nav[i].indexOf("#")!=-1){临时=nav[i].split("#");dy1js+=临时[0]+".html#"+临时[1]}else{dy1js+=nav[i]+".html"}
        临时=nav[i].split("／");
        临时=临时[临时.length-1].replace(/#/g,"-");
        临时=临时.replace(new RegExp('（本地）',"g"),"")
        dy1js+="'>"+临时+"</a>";
    }
}}
dy1js+="</nav>";
if(nav[0]=="搜索"){dy1js+="　<input type='text' id='输入' placeholder='搜索' onkeyup='确定()' autocomplete='off'/><div id='结果'></div>"}
dy1js+="<hr class='hr0'>";
dy1js+="<div class='index'><div class='index_top'><a onclick='编辑()'>编辑</a>　<a onclick='javascript:location.reload();'>刷新</a>　<a href='#top'>top</a><br></div><br><div id='index_dy1js'>";
for(let i=0;index.length>i;i++){if(index[i]=="br"){dy1js+="<br>"}else{dy1js+="<a href='#"+index[i]+"'>"+index[i]+"</a><br>"}}
dy1js+="</div><br></div>";

临时=h1.replace(/<small>/g,"").replace(/<\/small>/g,"");
document.title=临时;
}else if(子页面[0]=="0"){dy1js+="<div class='index'><div class='index_top'><a onclick='编辑()'>编辑</a>　<a href='../0.html'>总目录</a></div></div>";
}else{if(typeof(h1)!="undefined"){dy1js+="<h2>"+h1+"</h2> <a onclick='编辑()'>编辑</a><hr class='hr0'>"}dy1js+="<style>body{width: 90%}</style>"}

if(typeof(sjtk)!="undefined"){dy1js+="<button onclick='sjtk_随机()'>随机</button> <a onclick='sjtk_全部显示()'>全部显示</a>";
if(typeof(sjtk_s)!="undefined"){dy1js+=" <input type='text' id='输入' placeholder='搜索' onkeyup='确定()' autocomplete='off'/>"}
dy1js+="<div id='sjtk'></div>"}
if(typeof(qm)!="undefined"){dy1js+="<button onclick='打(乱=qm);qm_随机()'>随机</button><input type='text' id='qm_输入' placeholder='抽取次数' autocomplete='off'/><br><br><div id='qm'></div>"}
dy1js+="<textArea id='复制' style='position:absolute;top:-1000px'></textArea>";
dy1js+="<div class='dw_zz' id='dw_zz' style='display:none;'><div id='dw_x' onclick='dw_x()' style='display:none;'></div><div class='dw_tk'><div id='dw_hd'><span id='dwd'></span><span id='dwc'></span><div id='dw_hd_r' onclick='dw_x()' class='bukexuanzhong'>×</div></div></div></div>";
if(window.location.href.indexOf("file:///storage/emulated")!=-1){
    dy1js+="<link rel='stylesheet' href='0/all.css'>";
    统一[0]="../0/2/";
}
document.getElementById("dy").innerHTML=dy1js;

function 复(){document.getElementById('复制').value=制;let 复制=document.querySelector('#复制');复制.select();document.execCommand("Copy");notyf.confirm("已复制：<br>"+制)}
function 打(){let _乱=乱.slice();for(let i=0;i<_乱.length;i++){let j=getRandomInt(0,i);let t=_乱[i];_乱[i]=_乱[j];_乱[j]=t}function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1)+min)}乱=_乱}
function 展(){示=示.split("／");document.getElementById("zs"+示[0]).innerHTML="//"+示[1];document.getElementById("zs"+示[0]).style.color="#6A9955"}
!function(){function n(n,t){for(property in t)t.hasOwnProperty(property)&&(n[property]=t[property]);return n}function t(n,t){var i=document.createElement("div");i.className="notyf";var e=document.createElement("div");e.className="notyf-wrapper";var o=document.createElement("div");o.className="notyf-icon";var a=document.createElement("i");a.className=t;var r=document.createElement("div");r.className="notyf-message",r.innerHTML=n,o.appendChild(a),e.appendChild(o),e.appendChild(r),i.appendChild(e);var c=this;return setTimeout(function(){i.className+=" disappear",i.addEventListener(c.animationEnd,function(n){n.target==i&&c.container.removeChild(i)});var n=c.notifications.indexOf(i);c.notifications.splice(n,1)},c.options.delay),i}function i(){var n,t=document.createElement("fake"),i={transition:"animationend",OTransition:"oAnimationEnd",MozTransition:"animationend",WebkitTransition:"webkitAnimationEnd"};for(n in i)if(void 0!==t.style[n])return i[n]}this.Notyf=function(){this.notifications=[];var t={delay:2e3,alertIcon:"notyf-alert-icon",confirmIcon:"notyf-confirm-icon"};arguments[0]&&"object"==typeof arguments[0]?this.options=n(t,arguments[0]):this.options=t;var e=document.createDocumentFragment(),o=document.createElement("div");o.className="notyf-container",e.appendChild(o),document.body.appendChild(e),this.container=o,this.animationEnd=i()},this.Notyf.prototype.alert=function(n){var i=t.call(this,n,this.options.alertIcon);i.className+=" alert",this.container.appendChild(i),this.notifications.push(i)},this.Notyf.prototype.confirm=function(n){var i=t.call(this,n,this.options.confirmIcon);i.className+=" confirm",this.container.appendChild(i),this.notifications.push(i)}}();let notyf=new Notyf({delay:3000});

function 确定(){
let 结果="",输入=document.getElementById("输入").value.toLowerCase().split(" ");
for(let i=0;sjtk_s.length>i;i++){
    let 过程="0",关键词=sjtk_s[i].split(",");
    for(let i2=0;输入.length>i2;i2++){if(关键词[1].toLowerCase().indexOf(输入[i2])!=-1&&输入[i2]!=""){}else{过程="1"}}
    if(过程=="0"&&sjtk.indexOf(关键词[0])!=-1){结果+="<br><b><a onclick=\"复(制='"+关键词[0]+"')\">"+关键词[0]+"（删除码）</a></b>"+"<iframe src='1/"+关键词[0]+".html' height=100% width=100%></iframe><br>"}
}document.getElementById("sjtk").innerHTML=结果}

function sjtk_随机(){
    if(次数==0){乱=sjtk;打()}
    if(乱.length==次数){document.getElementById("sjtk").innerHTML="题库已空";次数=0;
    }else{document.getElementById("sjtk").innerHTML="<a onclick='删除码(制="+乱[次数]+")'>删除码</a><br><iframe src='1/"+乱[次数]+".html' height=100% width=100%></iframe>";次数+=1}
}
function sjtk_全部显示(){
    次数="";
    for(let i=0;sjtk.length>i;i++){次数+="<br><b><a onclick=\"复(制='"+sjtk[i]+"')\">"+sjtk[i]+"（删除码）</a></b>"+"<iframe src='1/"+sjtk[i]+".html' height=100% width=100%></iframe><br>"}
    document.getElementById("sjtk").innerHTML=次数;
    次数=0;
}
function 删除码(){复(制="\""+制+"\"")}

if(typeof(qm)!="undefined"){for(let i=0;qm.length>i;i++){
    if(qm[i][0]=="js"){锁="／"+qm[i][1];解();qm[i]=[锁,"",""]}
    else if(qm[i][0]=="hr"){qm[i][1]=qm[i][1]||"";qm[i][2]=qm[i][2]||"";index_dy1js+="<a href='#"+qm[i][1]+"-"+qm[i][2]+"'>"+qm[i][1]+" "+qm[i][2]+"</a><br>"}
}乱=qm;临时="qm不随机";qm_随机()}
function qm_随机(){
    let qm_输入=document.getElementById("qm_输入").value;
    if(qm_输入>0){
        dy1js="<div class='qm'>";
        let i2=qm_输入*1;
        for(let i=0;i2>i;i++){
            if(!乱[i]){i2-=i;i=0;dy1js+="<hr class='hr0'>";打()}
            if(乱[i][0]!="hr"&&乱[i][0]!="br"&&乱[i][0]+乱[i][1]+乱[i][2]!=""){
                if(乱[i][1]!=""||乱[i][2]!=""){dy1js+="<p onclick=\"复(制='"+乱[i][0]+"')\"><span class='提'>"+乱[i][0]+"<span class='示'><small>说明：</small>"+乱[i][1]+"<br><br><small>使用情况：</small>"+乱[i][2]+"</span></span></p>";
                }else{dy1js+="<p onclick=\"复(制='"+乱[i][0]+"')\">"+乱[i][0]+"</p>"}
            }else if((i2-qm_输入)>100){}else{i2+=1}
            }dy1js+="</div>";
    }else{
        dy1js="<table><tr><td><b>条目</b></td><td><b>说明</b></td><td><b>使用情况</b></td></tr>";
        for(let i=0;乱.length>i;i++){
            if(临时=="qm不随机"&&乱[i][0]=="hr"){
                if(乱[i][1].indexOf("〈")==-1||乱[i][2].indexOf("〈")==-1){dy1js+="<tr><td colspan='3'><a name='"+乱[i][1]+"-"+乱[i][2]+"'></a><h3>"+乱[i][1]+" <small>"+乱[i][2]+"</small></h3></td></tr>"}else{
                dy1js+="<tr><td colspan='3'><a name='"+乱[i][1]+"-"+乱[i][2]+"'></a><h3>"+乱[i][1]+" <small>"+乱[i][2]+"</small></h3></td></tr>"}}
            else if(临时=="qm不随机"&&乱[i][0]=="br"){dy1js+="<tr><td colspan='3'>"+乱[i][1]+"</td></tr>"}
            else if(乱[i][0]!="hr"&&乱[i][0]!="br"&&乱[i][0]+乱[i][1]+乱[i][2]!=""){dy1js+="<tr><td onclick=\"复(制='"+乱[i][0]+"')\">"+乱[i][0]+"</td><td>"+乱[i][1]+"</td><td>"+乱[i][2]+"</td></tr>"}
        }dy1js+="</table>"}
    document.getElementById("qm").innerHTML=dy1js;
    更新();
    document.getElementById("qm_输入").value=qm_输入;
}

function 解(){
try{
    锁=锁.split("／");
    let 锁id=锁[0];
    锁[2]=锁[2]||"异梦笔记";
    let wzjm_b="",wzjm_c=localStorage.getItem(锁[2]);
    锁=锁[1];
    for(let i=0;wzjm_c.length>i;i++){
        if(wzjm_b.indexOf(wzjm_c[i])!=-1){}
        else{wzjm_b+=wzjm_c[i]}
    }
    for(let i=0;wzjm.length>i;i++){
        if(wzjm_b.indexOf(wzjm[i])!=-1){}
        else{wzjm_b+=wzjm[i]}
    }
    wzjm_c=new RegExp('',"g");锁=锁.replace(wzjm_c,'／');
    for(let i=0;wzjm_b.length>i;i++){
        let 临时="／"+wzjm_b[i],临时b=wzjm[i];
        wzjm_c=new RegExp(临时,"g");锁=锁.replace(wzjm_c,临时b);
    }
    wzjm_c=new RegExp("／","g");锁=锁.replace(wzjm_c,"");
    锁=window.decodeURIComponent(atob(锁));
    if(锁id!=""){
        document.getElementById(锁id).innerHTML=锁;
        document.getElementById(锁id).removeAttribute("onclick")
    }
}
catch(e){
    try{notyf.alert("仅限本地查看")}catch(e){alert("仅限本地查看")}
    锁="<small>仅限本地查看</small>";
}
}

function 编辑(){
    if(window.location.href.indexOf("file:///")!=-1){
        制=window.location.href.replace(/file:\/\/\//g,"").split(":/");
        制="C:/mq/app/code.lnk C:/"+decodeURI(制[1].split("#")[0])+" & exit";
        复();
        window.location.href="pvocmd://";
    }else{try{notyf.alert("编辑功能仅在本地有效")}catch(e){alert("编辑功能仅在本地有效")};制="C:/MQ/异梦笔记/biji/"+decodeURI(decodeURI(window.location.href.split(".cafe/biji/")[1]));复()}
}

function dw(){
document.getElementById('dw_x').style.display="";
document.getElementById('dw_zz').style.display="";
document.getElementById('dw_zz').scrollTop=0;
if(dwd=="0"||dwd=="undefined"||dwd==""){
let dwb2="";if(dwb.indexOf("#")!=-1){dwb2="#"+dwb.split("#")[1];dwb=dwb.split("#")[0]}
dwb="<iframe src=\""+dwb+".html"+dwb2+"\" frameborder=\"0\" width=\"100%\" height=\"85%\" id=\"／／"+dwb+"\"></iframe>";
document.getElementById("dwd").innerHTML="";
}else{document.getElementById("dwd").innerHTML="<h2>"+dwd+"</h2><hr class='hr0'>";dwd="0"}
dwb=dwb.replace(/［引号］/g,"\"");
document.getElementById("dwc").innerHTML=dwb;
}
function dw_x(){document.getElementById("dwc").innerHTML="";document.getElementById("dwd").innerHTML="";document.getElementById('dw_zz').style.display="none";document.getElementById('dw_x').style.display="none"}

function 更新(){
乱="a";let 重复更新=0;
for(let i=0;2>i;i++){
if(document.getElementById(乱)){
临时=document.getElementById(乱).innerHTML;
临时=临时.split("〈");
dy1js=临时[0];
if(typeof(qm)!="undefined"){}else{index_dy1js=""}
for(let i=1;临时.length>i;i++){
    let 临时2=临时[i].split("〉");
    if(临时2[0].indexOf("|")!=-1){
        临时0=临时2[0].split("|");

    if(_执行a[临时0[0]]){if(typeof _执行a[临时0[0]]=="string"){_执行a[_执行a[临时0[0]]](i)}else{_执行a[临时0[0]](i)}}

    else{
        if(临时0[1].indexOf("#")!=-1){临时0[1]=临时0[1].split("#");dy1js+="<a href='";if(临时0[1][0]==""){dy1js+="#"+临时0[1][1]}else{dy1js+=临时0[1][0]+".html#"+临时0[1][1]}dy1js+="'>"+临时0[0]+"</a>";
        }else if(临时0[1]>0){dy1js+="<a href='1/"+临时0[1]+".html'>"+临时0[0]+"</a>";
        }else{dy1js+="<a href='"+临时0[1]+".html'>"+临时0[0]+"</a>"}
    }

    }else{//不包含|
    临时0=临时2[0];
    if(_执行b[临时0]){if(typeof _执行b[临时0]=="string"){_执行b[_执行b[临时0]](i)}else{_执行b[临时0](i)}}
    else if(临时0>0){dy1js+="<a href='1/"+临时0+".html'>"+临时0+"</a>"}
    else{
        if(临时0.indexOf("#")!=-1){
            if(临时0[0]=="#"){
                dy1js+="<a href='#"+临时0.split("#")[1]+"'>#"+临时0.split("#")[1]+"</a>"
            }else{
                dy1js+="<a href='"+临时0.split("#")[0]+".html#"+临时0.split("#")[1]+"'>"+临时0.split("#")[0]+"-"+临时0.split("#")[1]+"</a>";
            }
        }
        else if(临时0.indexOf("／")!=-1){let 临时3=临时0.split("／");dy1js+="<a href='"+临时0+".html'>"+临时3[临时3.length-1].replace(new RegExp('（本地）',"g"),"")+"</a>"}
        else{dy1js+="<a href='"+临时0+".html'>"+临时0.replace(new RegExp('（本地）',"g"),"")+"</a>"}

        }
    }
    dy1js+=临时2[1];
}
    if(dy1js.indexOf("〈")!=-1){重复更新=1}
    if(typeof(index)!="undefined"){if(index[0]=="自动"){index[0]="";document.getElementById("index_dy1js").innerHTML=index_dy1js}}
    if(乱=="a"){dy1js+="<br class='br_a'><br class='br_a'><br class='br_a'><br class='br_a'><br class='br_a'>"}
    dy1js=dy1js.replace(/\n/g,"").replace(/<br><br><br><br><br>/g,"<br><br class='br_a'><br class='br_a'><br class='br_a'><br class='br_a'>").replace(/<br><br><br><br>/g,"<br><br class='br_a'><br class='br_a'><br class='br_a'>").replace(/<br><br><br>/g,"<br><br class='br_a'><br class='br_a'>").replace(/<br><br>/g,"<br><br class='br_a'>").replace(/<\/div><br>/g,"</div><br class='br_a'>").replace(/ \| /g,"<span class=\"a\"> | </span>").replace(/ &gt; /g,"<span class=\"a\"> > </span>").replace(/<hr>/g,"<hr class='hr1'>").replace(/“/g,"<b>“</b>").replace(/”/g,"<b>”</b>");
    document.getElementById(乱).innerHTML=dy1js}乱="dy"}
    if(重复更新==1){更新()}
}

/*代码来自b站wiki*/function 六维图(){$('div[data-type="canvas"]').each(function(){var $div=$(this),html=$div.text('')[0].outerHTML;html=html.replace('<div',"<canvas ").replace('></div>',' />');var $hex=$(html);$hex[0].height=$hex.data('height')||200;$hex[0].width=$hex.data('width')||225;$div.replaceWith($hex);var ability_value=[],ability_name=[],ability_value2=[],maxvalue=$div.data('maxvalue'),canvasinfo=$div.data('value').split('|');$.each(canvasinfo,function(i,val){var data=val.split('_');ability_value.push(data[0]||0);ability_name.push(data[1]);ability_value2.push(data[2]||0)});polygon($hex[0],canvasinfo.length,maxvalue,ability_value,ability_name,ability_value2)});function polygon(obj,side,part,ability_value,ability_name,ability_value2){var ability=obj.getContext('2d');ability.canvas.width=obj.width;ability.canvas.height=obj.height;var width=obj.width,height=obj.height,xCenter=width*0.5,yCenter=height*0.5,radius=width*0.3,space=radius/part,theta=Math.PI*2/side;for(var j=part;j>=1;j--){ability.beginPath();for(var i=0;i<=side;i++){ability.lineTo(Math.cos(i*theta)*space*j+xCenter,-Math.sin(i*theta)*space*j+yCenter)}var r=10,g=31,b=146,a=0.2;ability.lineWidth=1;ability.strokeStyle="rgba(128,128,128,1)";ability.stroke();ability.fillStyle="rgba("+r+","+g +","+b+","+a+")";ability.fill();ability.closePath();for(var i=0;i<=side;i++){ability.beginPath();ability.moveTo(xCenter,yCenter);ability.lineTo(Math.cos(i*theta)*space*j+xCenter,-Math.sin(i*theta)*space*j+yCenter);ability.stroke();ability.closePath()}}ability.beginPath();for(var i=0;i<=side;i++){var x=Math.cos(i*theta)*radius*(ability_value[i%side]/part)+xCenter;var y=-Math.sin(i*theta)*radius*(ability_value[i%side]/part)+yCenter;ability.lineTo(x,y)}ability.closePath();ability.fillStyle="rgba(255,255,255,0.6)";ability.fill();ability.beginPath();for(var i=0;i<=side;i++){var x=Math.cos(i*theta)*radius*(ability_value2[i%side]/part)+xCenter;var y=-Math.sin(i*theta)*radius*(ability_value2[i%side]/part)+yCenter;ability.lineTo(x,y)}ability.closePath();ability.lineWidth=2;ability.strokeStyle="rgba(255,255,255,1)";ability.stroke();for(var i=0;i<side;i++){ability.fillStyle="rgba(0,0,0,1)";ability.font="normal 15px Microsoft Yahei";if(Math.cos(i*theta)*radius>0){if(i==0){ability.textAlign='left';var x=Math.cos(i*theta)*radius+xCenter+3}else{ability.textAlign='center';var x=Math.cos(i*theta)*radius+xCenter+3}}else{ability.textAlign='left';var x=Math.cos(i*theta)*radius*1.6+xCenter}var y=-Math.sin(i*theta)*radius*1.3+yCenter;ability.fillText(ability_name[i],x,y+6)}}}

function 显示(o){document.getElementById("隐藏"+o).style="";document.getElementById("显示"+o).style="display:none"}
function 不显示(o){document.getElementById("隐藏"+o).style="display:none";document.getElementById("显示"+o).style=""}

window.onload=function(){
    if(window.location.href.indexOf("#")!=-1){window.location.href=window.location.href}
    更新();
    if(window.location.href.indexOf("#")!=-1){window.location.href=window.location.href}
    if(最后执行["六维图"]){六维图()}
}