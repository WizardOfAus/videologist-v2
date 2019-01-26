
function hide_overla_1y(){
document.getElementById("overlay").style.display = "none" ;
}
function trackmouse(event) {

if (event.clientY > 250 && event.clientX < 100)
show_overlay(event.clientX,event.clientY) ;
else 
hide_overlay() ; 
}
document.getElementById("video").onmousemove = trackmouse ;

