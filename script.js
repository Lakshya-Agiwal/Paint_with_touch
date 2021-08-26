var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
color="red";
r=20;
w=5;

var last_position_x = 0;
var last_position_y = 0;
var width=screen.width;
var new_width=screen.width-70;
var height=screen.height;
var new_height=height-300;
if (width<992)
{
   document.getElementById("myCanvas").width=new_width;
   document.getElementById("myCanvas").height=new_height;
   document.body.style.overflow="hidden";

}
// inner html is used to write inside the tag like p or h1.
canvas.addEventListener("touchstart",myScreenTouch)
 function myScreenTouch(e)
{
   last_position_x=e.touches[0].clientX-canvas.offsetLeft;
   last_position_y=e.touches[0].clientY-canvas.offsetTop;
    color=document.getElementById("c_input").value;
    r=document.getElementById("r_input").value;
    w=document.getElementById("w_input").value;
   
}

canvas.addEventListener("touchmove",Touchmove);
 function Touchmove(e)
{
   current_Position_Of_X=e.touches[0].clientX-canvas.offsetLeft;
   current_Position_Of_Y=e.touches[0].clientY-canvas.offsetTop;
   
       ctx.beginPath();
       ctx.strokeStyle= color;
       ctx.lineWidth=w;
       ctx.arc(current_Position_Of_X,current_Position_Of_Y,r,0,360);
      
       ctx.stroke();
       last_position_x=current_Position_Of_X;
       last_position_y=current_Position_Of_Y;
       
   
   
   
}
function clear_area()
   {
     ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
   }

