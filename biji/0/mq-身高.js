let 执行=[0,0];

function 执行b(o){
    if((o+"").indexOf("_")!=-1){
        o=o.split("_");
        执行[1]=o[0];
        执行[0]=o[1];
    }else{
        if(执行[0]==0){
            执行[0]=1;
        }
        执行[1]=o;
    }
    打印();
}

function 打印(o){
    let 默认="";
    let datb=[];
    let dy=`〈h0|0|<b><a onclick=\"执行[0]=0;打印()\">按分类显示</a></b>〉〈h0|0|<b><a onclick=\"执行[0]=1;打印()\">合并显示</a></b><br>〉
    <style>
        .首行{position:sticky;top:0;font-weight:bold}
        .hui{color:#00000030}
        .男{background-color:#dbe6ff}
        .女{background-color:#ffeafc}
        .过轻{background-color:#faffdd}
        .正常{background-color:#e2ffe1}
        .超重{background-color:#ffebdc}
        .肥胖{background-color:#ffcece}
        span.过轻,span.正常,span.超重,span.肥胖{padding:5px;margin:5px;border-radius:10px}
        .过轻,.正常,.超重,.肥胖{color:#00000050}
    </style>
    <span class='过轻'>过轻</span><span class='正常'>正常</span><span class='超重'>超重</span><span class='肥胖'>肥胖</span><br><br>`
    if(执行[0]==0){
        for(let i=0;data.length>i;i++){
            dy+="〈h4|"+data[i][0]+"〉<table><tr class='首行'><td>名字</td><td>性别</td><td><a onclick=\"执行b('"+data[i][0]+"_2')\">年龄</a></td><td><a onclick=\"执行b('"+data[i][0]+"_3')\">身高</a>cm</td><td><a onclick=\"执行b('"+data[i][0]+"_4')\">体重</a>kg</td><td>BMI</td><td></td></tr>";
            for(let i2=1;data[i].length>i2;i2++){
                //打印
                dy+="<tr><td>"+data[i][i2][0]+"</td><td class='"+data[i][i2][1]+"'>"+data[i][i2][1]+"</td><td>"+data[i][i2][2]+"</td><td>"+data[i][i2][3]+"</td><td>"+data[i][i2][4]+"</td>";
                if(data[i][i2][4]!=0&&data[i][i2][3]!=0){
                    let 临时=data[i][i2][3]/100;
                    临时=(data[i][i2][4]/(临时*临时)+"").split(".")[0];
                    dy+="<td class='";
                    if(临时<18.5){dy+="过轻"}
                    else if(临时<24){dy+="正常"}
                    else if(临时<28){dy+="超重"}
                    else{dy+="肥胖"}
                    dy+="'>"+临时;
                }else{dy+="<td>"}
                dy+="</td><td>";
                if(data[i][i2][6]&&data[i][i2][6]!=""){
                    if(!data[i][i2][5]||data[i][i2][5]==""){
                        data[i][i2][5]="<small>提示</small>";
                    }
                    dy+="<span class='提示' data-msg='"+data[i][i2][6]+"'>"+data[i][i2][5]+"</span>";
                }else{
                    dy+=data[i][i2][5];
                }
                dy+="</td></tr>";
            }
            dy+="</table><br>";
        }
    }else{//0 按分类全部展示

        if(执行[0]==1){//1 全部展示 [7]是作品名
            for(let i=0;data.length>i;i++){
                // datb.push(data[i].slice(1));
                datb=datb.concat(data[i].slice(1).map(row=>{return [...row, data[i][0]];}))
            }
        }else{//只展示特定分类
            for(let i=0;data.length>i;i++){
                if(执行[1]==data[i][0]){
                    dy+="〈h4|"+data[i][0]+"〉";
                    datb=data[i].slice(1);
                    默认=执行[1]+"_";
                    执行[1]=执行[0];
                    break;
                }
            }
        }
        //排序
        if(执行[1]>1){
            let datc=[datb[0]];
            for(let i=1;datb.length>i;i++){
                let 比较=0;
                for(let i2=0;datc.length>i2;i2++){
                    if(datb[i][执行[1]]>datc[i2][执行[1]]&&datb[i][执行[1]]!=0){
                        datc.splice(i2,0,datb[i]);
                        比较=1;
                        break;
                    }
                }
                if(比较==0){
                    datc[datc.length]=datb[i];
                }
            }
            datb=datc;
        }
        //打印
        dy+="<table><tr class='首行'><td>名字</td><td>性别</td><td><a onclick=\"执行b('"+默认+"2')\">年龄</a></td><td><a onclick=\"执行b('"+默认+"3')\">身高</a>cm</td><td><a onclick=\"执行b('"+默认+"4')\">体重</a>kg</td><td>BMI</td><td></td></tr>";
        for(let i=0;datb.length>i;i++){
            dy+="<tr><td>"+datb[i][0];
                if(执行[0]==1){
                    dy+=" <small class='提示' data-msg='"+datb[i][7]+"'><a onclick=\"执行[0]='"+datb[i][7]+"';打印()\">"+datb[i][7][0]+"</a></small>"
                }
            dy+="</td><td class='"+datb[i][1]+"'>"+datb[i][1]+"</td><td>"+datb[i][2]+"</td><td>"+datb[i][3]+"</td><td>"+datb[i][4]+"</td>";

                if(datb[i][4]!=0&&datb[i][3]!=0){
                    let 临时=datb[i][3]/100;
                    临时=(datb[i][4]/(临时*临时)+"").split(".")[0];
                    dy+="<td class='";
                    if(临时<18.5){dy+="过轻"}
                    else if(临时<24){dy+="正常"}
                    else if(临时<28){dy+="超重"}
                    else{dy+="肥胖"}
                    dy+="'>"+临时;
                }else{dy+="<td>"}
                    dy+="</td><td>";

                if(datb[i][6]&&datb[i][6]!=""){
                    if(!datb[i][5]||datb[i][5]==""){
                        datb[i][5]="<small>提示</small>";
                    }
                    dy+="<span class='提示' data-msg='"+datb[i][6]+"'>"+datb[i][5]+"</span>";
                }else{
                    dy+=datb[i][5];
                }
                dy+="</td></tr>";
        }
        dy+="</table>";
    }

    //0、1 默认排序
    //2 年龄排序
    //3 身高排序
    //4 体重排序

    dy=dy.replace(new RegExp('<td>0</td>',"g"),"<td class='hui'>-</td>")
    document.getElementById("a").innerHTML=dy;
    if(o!=0){更新();}
}

打印(0);