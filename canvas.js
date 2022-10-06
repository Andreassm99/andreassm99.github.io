var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var centreX = 200;
var centreY = 200;
var radius = 20;

ctx.fillStyle = "#FF9933";
ctx.fillRect(centreX-112.5, centreY-75, 225, 50);
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(centreX-112.5, centreY-75+50, 225, 50);
ctx.fillStyle = "#138808";
ctx.fillRect(centreX-112.5, centreY-75+100, 225, 50);

ctx.beginPath();
ctx.arc(centreX, centreY, radius, 0, Math.PI*2, false);
ctx.strokeStyle = "#000080";
ctx.stroke();

for(var i=0; i<Math.PI*2-Math.PI/12; i+=Math.PI/12) {
    ctx.beginPath();
    ctx.moveTo(centreX, centreY);
    ctx.lineTo(centreX + radius*Math.sin(i), centreY + radius*Math.cos(i));
    ctx.strokeStyle = "#000080";
    ctx.stroke();
}