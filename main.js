var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width="4";
var width=screen.width;
newwidth=screen.width - 70;
newheight=screen.height - 300;
if (width < 992)
{
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e)
{
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    lastx=e.touches[0].clientX-canvas.offsetLeft; 
    lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentX , currentY);
        ctx.stroke();
    lastx = currentX;
    lasty = currentY;
}
function ClearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}