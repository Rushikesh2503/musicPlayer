
var canvas,context;


function getById(x){
    return document.getElementById(x)
}

var play=getById("controlBtn_play");
var pause=getById("controlBtn_pause");
var music=getById("musicFile");
var musicStarted=false;
var Width=5;
var Height=[];
var X=5;
var Y=[];

window.onload = start;
play.style.display = "inline";
pause.style.display = "none";
 
 
let i=0;
while(i<=150){
    Y.push(Math.floor(Math.random()*80)+100);
    Height.push(Math.floor(Math.random()*200)+100);
    i++;
}

function rect(x,y,w,h,bg){
    context.fillStyle=bg;
    context.beginPath();
    context.fillRect(x,y,w,h);
    context.closePath();
}
function circle(x,bg) {
    context.beginPath();
    context.arc(x, 220, 5, 0, Math.PI*2);
    context.fillStyle=bg;
    context.fill();
    context.closePath();
}
function straightLine(posi,y,bg){
    context.beginPath();
    context.moveTo(posi,y+20);
    context.lineTo(posi,220);
    context.strokeStyle=bg;
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
}

function start() {
    canvas = getById("canvas");
    context = canvas.getContext("2d");
    canvas.width = 1500;
    canvas.height = 600;
    createGraph();
}

function createGraph(){
    // console.log("canvasCreated");
   let i=0;
   while(i<=150){
    if (i == 150) Height[i] = 500
      rect(X, Y[i], Width, Height[i],"black");
      X = X + 10;
      i++;
   }

   bannerBoard(55,60,"rgb(17, 209, 34)","Introduction");
   bannerBoard(243,30,"rgb(34, 221, 140)","one_six");
   bannerBoard(1257,5,"rgb(34, 221, 140)","");
   bannerBoard(1283,60,"rgb(26, 0, 184)","Profile");
   bannerBoard(1347,7,"rgb(103, 165, 67)","Rapport Building-Energy");
   bannerBoard(1304,35,"rgb(146, 102, 102)","Rapport Building-Empathy");
   
}

function bannerBoard(x,y,bg,title){
    let titlePos=x+((title.length*7)/2);

    if(x>1300){
    circle(titlePos,bg);
       straightLine(titlePos,y,bg);
       rect(x-98,y,title.length*7+30,20,bg);

       context.fillStyle="white";
       context.font="10pt bold";
       context.fillText(title,x-60,y+15)

    }
    else{
    circle(titlePos,bg);
    straightLine(titlePos,y,bg);
    rect(x,y,title.length*7,20,bg);

    context.fillStyle="white";
    context.font="10pt bold";
    context.fillText(title,x+5,y+15)
    }

}


