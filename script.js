
var i =0;
var score = 0;
var serce=4;
var gra=1;
var program=1;
function liczby(){
    if(gra==1){
    var wyswietlacz = document.getElementById("wyswietlacz");
    i++;
    wyswietlacz.textContent = i;
    console.log(i);
    time=1000;
    }else if(gra==2){
        var wyswietlacz = document.getElementById("wyswietlacz");
        i=Math.round(Math.random()*1000)
        wyswietlacz.textContent = i;
        console.log(i);
        time=1000;
    }else if(gra==3){
        var wyswietlacz = document.getElementById("wyswietlacz");
        i=Math.round(Math.random()*10000)
        wyswietlacz.textContent = i;
        console.log(i);
        time=500;
    }
}

function latwy(){
    
    time=1000;
    if(program==1){
        gra=1;
        odpal();
    }
    program=0;
}

function sredni(){
    time=750;
    if(program==1){
        gra=2;
        odpal();
    }
    program=0;
}

function trudny(){
    time=250;
    if(program==1){
        gra=3;
        odpal();
    }
    program=0;
}

function refresh(){
    location.reload();
}

function serca(){
    var sercawys = document.getElementById("serca");
    console.log(serce);
    serce--;
    if(serce==3){
        sercawys.textContent= "<3   <3";
    }else 
    if(serce==2){
        sercawys.textContent="<3";
    }else 
    if(serce==1){
        sercawys.textContent="";
        gra=0;
        var wyswietlacz = document.getElementById("wyswietlacz");
        wyswietlacz.textContent="Przegrales";
        setTimeout(refresh,2000);
    }
    
}



function sprawdza(){
    let n = i.toString().includes('7');
    if((i%7==0 && i!=0) || n==true){
        score++;
        liczby();
    }else if(i%7!=0 || i==0){
        serca();
    }

    let wysScore = document.getElementById("score");
    wysScore.textContent=score; 
}

function odpal(){
    setInterval(liczby,time)
}


let przycisk = document.getElementById("przycisk").addEventListener('click',sprawdza);

let latwyp = document.getElementById("latwy").addEventListener('click',latwy);
let srednip = document.getElementById("sredni").addEventListener('click',sredni);
let trudnyp= document.getElementById("trudny").addEventListener('click',trudny);
