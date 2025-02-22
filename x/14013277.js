let a2d=100;
let a2p=["，","。","、","～","~","！","？"];//排除

function a2a(a,b){
    let 临时="";
    for(let i=0;a.length>i;i++){
        if(a2p.indexOf(a[i])!=-1){
            临时+=a[i];
        }else{
            临时+=String.fromCharCode(a[i].charCodeAt(0)+a2d);
        }
    }
    if(b){dy+=临时;
    }else{return 临时;}
}

function a2b(a,b){
    let 临时="";
    for(let i=0;a.length>i;i++){
        if(a2p.indexOf(a[i])!=-1){
            临时+=a[i];
        }else{
            临时+=String.fromCharCode(a[i].charCodeAt(0)-a2d);
        }
    }
    if(b){dy+=临时;
    }else{return 临时;
    }
}