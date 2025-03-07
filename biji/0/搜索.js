if(data[0]!=""){
    let 搜索dy="";
    for(let i=data.length-1;i>0;i--){
        let 关键词;
        if(data[i][1]){关键词=data[i][1];}else{关键词=data[i][0];}
        if(关键词>0){关键词="1/"+关键词;}
        搜索dy+="<a href='"+关键词+".html'>"+data[i][0]+"</a>";
        if(data[i][3]){搜索dy+="："+data[i][3];}
        搜索dy+="<br>";
    }
    document.getElementById(data[0]).innerHTML=搜索dy;
}

function 确定(){
    let 输入=document.getElementById("输入").value.toLowerCase().split(" ");
    let 结果="";
    for (let i=data.length-1;i>0;i--){
        let 过程="0";
        let 关键词;
        if(data[i][2]){关键词=data[i][2];}else{关键词=data[i][0];}
        for(let i2=0;输入.length>i2;i2++){
            if(关键词.toLowerCase().indexOf(输入[i2])!=-1&&输入[i2]!=""){}
            else{过程="1";}
        }
        if(过程=="0"){
            if(data[i][1]){关键词=data[i][1];}else{关键词=data[i][0];}
            if(关键词>0){关键词="1/"+关键词;}

            let 结果临时="<p><a href='"+关键词+".html'>"+data[i][0]+"</a>";
            if(data[i][3]){结果临时+="："+data[i][3];}
            结果临时+="</p>";
                if(关键词==输入){结果=结果临时+结果;}else{结果+=结果临时;}
        }
    }
    if(输入>0){
        结果+="<p><a href='1/"+输入+".html'>/1/"+输入+".html</a>";
    }
    if(结果==""){结果="<hr><p><b>无结果</b><br>可能的页面：</p><p><a href='"+输入+".html'>"+输入+"</a></p>";}else{结果="<hr>"+结果+"<p><a href='"+输入+".html'>-</a></p>"}
    if(输入==""){结果="";}
    document.getElementById("结果").innerHTML = 结果;
    if (event.keyCode == 13){
        window.location.href=结果.split("href='")[1].split("'>")[0];
    }
}

// function 键入(){
//     let 键入临时=document.getElementById("输入").value;
//     if(键入临时!=""){localStorage.setItem("异梦笔记", 键入临时);}
// }
// function sjtk_键入(){
//     let 键入临时=document.getElementById("输入").value;
//     if(键入临时!=""){localStorage.setItem("sjtk_异梦笔记", 键入临时);}
// }