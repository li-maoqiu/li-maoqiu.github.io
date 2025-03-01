document.getElementById("dy14083468").innerHTML=`
<style>
.button-parrot-bc{
background-color:#111111;
padding:100px;
}

span.par{
background:transparent;
color:#fff;
padding:0.8rem 2rem;
font-size:1.4em;
outline:none;
position:relative;
transition:0.2s ease-in-out;
letter-spacing:2px;
}

.name{
width:100%;
text-align:center;
padding:0 0 3rem;
padding-top:4rem;
letter-spacing:0.5px;
text-transform:uppercase;
text-shadow:0 1px 1px #00000066;
}

.button-parrot .parrot{
position:absolute;
width:80px;
text-align:center;
animation:blink 0.8s infinite;
color:transparent;
}

.button-parrot .parrot:before{
font-size:0.7em;
content:"不要进";
}

.button-parrot .parrot:nth-child(1){
top:-30px;
left:-40px;
transform:rotate(-20deg);
animation-duration:1.5s;
}

.button-parrot .parrot:nth-child(2){
right:-40px;
top:-20px;
transform:rotate(15deg);
animation-duration:1.3s;
}

.button-parrot .parrot:nth-child(3){
top:-60px;
left:15px;
transform:rotate(10deg);
animation-duration:1s;
}

.button-parrot .parrot:nth-child(4){
top:-70px;
left:95px;
transform:rotate(2deg);
animation-duration:1.7s;
}

.button-parrot .parrot:nth-child(5){
top:80px;
left:105px;
transform:rotate(-20deg);
animation-duration:1.8s;
}

.button-parrot .parrot:nth-child(6){
top:80px;
left:5px;
transform:rotate(10deg);
animation-duration:1.2s;
}

.button-parrot .parrot:nth-child(7){
top:50px;
}

.button-parrot span:hover .parrot:before{
font-size:0.7em;
content:"会死";
width:70px;
color:#ff0000;
}

@keyframes blink{
25%,75%{color:transparent;}
40%,60%{color:#fff;}
}

.gradient-box{
color: linear-gradient(to bottom, #111111, #11111100);
background: linear-gradient(to bottom, #11111100, #111111);
}

.gradient-text{
background-image: linear-gradient(to bottom, #FF0000, #ffffff);
-webkit-background-clip: text;
background-clip: text;
color: transparent;
}

</style>

1<br>2<br>3<br>4<br>5<br>6

<div class="gradient-box">
<div class="gradient-text">
1<br>2<br>3<br>4<br>5<br>6
</div>
</div>

<div class="button-parrot-bc">

<div class="item button-parrot">
<span class="par"><a onclick="console.log(1)">房门</a>
<div class="parrot"></div>
<div class="parrot"></div>
<div class="parrot"></div>
<div class="parrot"></div>
<div class="parrot"></div>
<div class="parrot"></div>
</span>
</div>

</div>
`;